const {
  upperCamelCase,
  lowerCamelCase,
  kebabCase,
  copyDirDeep,
  listDir,
  execCommand,
} = require("./utils");

module.exports = function generator(plop) {
  plop.setGenerator("new", {
    description: "为carol-ui创建新的组件",
    prompts: [
      {
        type: "input",
        name: "componentName",
        message: "要创建的新组件的名称是什么?",
        validate: (input) => {
          if (!input) {
            return "componentName is required";
          }
          return true;
        },
      },
    ],
    actions: (data) => {
      const { componentName } = data;
      console.log(componentName);
      // 大驼峰命名
      const upperCamelCaseName = upperCamelCase(componentName);
      // 小驼峰命名
      const lowerCamelCaseName = lowerCamelCase(componentName);
      // bebab case 命名
      const kebabCaseName = kebabCase(componentName);
      return [
        {
          type: "add",
          path: `packages/test1/components/${kebabCaseName}/src/${kebabCaseName}.ts`,
          templateFile: "templates/component/src/componentTs.hbs",
          data: {
            upperCamelCaseName,
            lowerCamelCaseName,
            kebabCaseName,
          },
        },
        {
          type: "add",
          path: `packages/test1/components/${kebabCaseName}/src/${kebabCaseName}.vue`,
          templateFile: "templates/component/src/componentVue.hbs",
          data: {
            upperCamelCaseName,
            lowerCamelCaseName,
            kebabCaseName,
          },
        },
        {
          type: "add",
          path: `packages/test1/components/${kebabCaseName}/styles/${kebabCaseName}.ts`,
          templateFile: "templates/component/styles/componentScss.hbs",
          data: {
            upperCamelCaseName,
            lowerCamelCaseName,
            kebabCaseName,
          },
        },
        {
          type: "add",
          path: `packages/test1/components/${kebabCaseName}/styles/index.ts`,
          templateFile: "templates/component/styles/index.hbs",
          data: {
            upperCamelCaseName,
            lowerCamelCaseName,
            kebabCaseName,
          },
        },
        {
          type: "add",
          path: `packages/test1/components/${kebabCaseName}/styles/light.ts`,
          templateFile: "templates/component/styles/light.hbs",
          data: {
            upperCamelCaseName,
            lowerCamelCaseName,
            kebabCaseName,
          },
        },
        {
          type: "add",
          path: `packages/test1/components/${kebabCaseName}/index.ts`,
          templateFile: "templates/component/index.hbs",
          data: {
            upperCamelCaseName,
            lowerCamelCaseName,
            kebabCaseName,
          },
        },
      ];
    },
  });
};
