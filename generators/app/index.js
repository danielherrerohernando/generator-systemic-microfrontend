const yeoman = require("yeoman-generator");
const _ = require("lodash");
const yosay = require("yosay");
const fs = require("fs");
const path = require("path");
const exec = require("child_process").execSync;

const templatesFolder = path.join(__dirname, "templates");

module.exports = yeoman.Base.extend({
  prompting: function() {
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your service name",
        default: this.appname.replace(/\s+/g, "-")
      },
      {
        type: "input",
        name: "description",
        message: "A brief description",
        default: ""
      }
    ]).then(
      function(_answers) {
        const upperName = _answers.name.toUpperCase();
        _answers = {
          ..._answers,
          upperName: upperName.replace(/-/g, "_")
        };
        this.props = _answers;
        this.props.components = [
          "app",
          "config",
          "healthcheck",
          "logging",
          "express",
          "routes"
        ];
      }.bind(this)
    );
  },
  writing: {
    config: function() {
      this._copyFiles("config", "config");
      this._copyFiles(".helm", ".helm");
      this._copyFiles("docker", "docker");
      this._copyFiles("react-app", "react-app");
      this._copyFiles("root", ".");
    },
    app: function() {
      this._copyAppFiles();
    }
  },
  install: function() {
    return this.installDependencies({ npm: true, bower: false });
  },
  _installReactDependencies: function() {
    this.log(yosay("Installing React App dependencies on react-app folder"));
    exec("npm install");
  },
  _buildReactBundles: function() {
    this.log(yosay("Building Micro-Frontend Bundle"));
    exec("npm run build:microfrontend");
    this.log(yosay("Building Independent Bundle"));
    exec("npm run build:independent");
  },
  end: function() {
    const reactDir = `${process.cwd()}/react-app`;
    process.chdir(reactDir);
    this._installReactDependencies();
    this._buildReactBundles();

    var outputMsg = `\n\nYour service ${
      this.props.name
    } has been created.\nnpm run start - start your systemic micro-frontend service`;
    this.log(yosay(outputMsg));
  },
  _copyFiles: function(from, to) {
    const configFiles = fs.readdirSync(path.join(templatesFolder, from));
    const self = this;
    _.forEach(configFiles, function(file) {
      self.fs.copyTpl(
        self.templatePath(`./${from}/${file}`),
        self.destinationPath(`${to}/${file.replace(/^_/, "")}`),
        self.props
      );
    });
  },
  _copyAppFiles: function() {
    const self = this;
    this.fs.copy(
      this.templatePath("./test/.eslintrc"),
      this.destinationPath("./test/.eslintrc")
    );
    this.fs.copy(
      this.templatePath("./test/*"),
      this.destinationPath("./test/")
    );
    _.forEach(this.props.components, function(component) {
      self.fs.copy(
        self.templatePath(`./lib/components/${component}/**/*`),
        self.destinationPath(`./components/${component}/`)
      );
    });
  }
});
