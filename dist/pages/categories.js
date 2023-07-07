"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/pages/categories.tsx
var categories_exports = {};
__export(categories_exports, {
  default: () => categories_default
});
module.exports = __toCommonJS(categories_exports);
var import_core5 = require("@mantine/core");
var import_form = require("@mantine/form");
var import_react12 = require("react");

// node_modules/react-icons/lib/esm/iconBase.js
var import_react2 = __toESM(require("react"));

// node_modules/react-icons/lib/esm/iconContext.js
var import_react = __toESM(require("react"));
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/bi/index.esm.js
function BiCategory(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" } }] })(props);
}

// node_modules/react-icons/fi/index.esm.js
function FiSearch(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "11", "cy": "11", "r": "8" } }, { "tag": "line", "attr": { "x1": "21", "y1": "21", "x2": "16.65", "y2": "16.65" } }] })(props);
}

// node_modules/react-icons/md/index.esm.js
function MdWarningAmber(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2z" } }, { "tag": "path", "attr": { "d": "M13 16h-2v2h2zM13 10h-2v5h2z" } }] })(props);
}

// src/queries/CategoryQueries.ts
var import_react_query = require("@tanstack/react-query");

// src/config/axios.ts
var import_axios = __toESM(require("axios"));
var axios_default = import_axios.default.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true
});

// src/queries/CategoryQueries.ts
var getCategories = async () => {
  const { data } = await axios_default.get("/categories");
  return data;
};
var postCategory = async (props) => {
  const { data } = await axios_default.post("/category", props);
  return data;
};
var deleteCategory = async (id) => {
  const { data } = await axios_default.delete(`/category`, { params: { id } });
  return data;
};
var patchCategory = async (props) => {
  const { data } = await axios_default.patch(`/category`, props);
  return data;
};
var useGetCategories = () => (0, import_react_query.useQuery)(["categories"], getCategories);
var usePostCategory = () => (0, import_react_query.useMutation)(["category"], postCategory);
var useDeleteCategory = () => (0, import_react_query.useMutation)(["category"], deleteCategory);
var usePatchCategory = () => (0, import_react_query.useMutation)(["category"], patchCategory);

// src/types/patchCategory.ts
var import_zod = require("zod");
var PatchCategorySchema = import_zod.z.object({
  id: import_zod.z.string().min(1, { message: "Id should have at least 1 letter" }),
  name: import_zod.z.string().min(2, { message: "Name should have at least 2 letters" })
});

// src/types/postCategory.ts
var import_zod2 = require("zod");
var PostCategorySchema = import_zod2.z.object({
  name: import_zod2.z.string().min(2, { message: "Name should have at least 2 letters" })
});

// src/pages/_app.tsx
var import_core4 = require("@mantine/core");
var import_react_query2 = require("@tanstack/react-query");
var import_react_query_devtools = require("@tanstack/react-query-devtools");
var import_react10 = require("next-auth/react");
var import_react11 = require("react");

// src/components/AuthGuard.tsx
var import_router = require("next/router");
var import_react3 = require("next-auth/react");
var import_react4 = require("react");
var import_core = require("@mantine/core");
var import_react5 = __toESM(require("react"));

// src/components/PageLayout.tsx
var import_core3 = require("@mantine/core");
var import_react8 = require("next-auth/react");
var import_react9 = require("react");

// src/components/Navbar.tsx
var import_core2 = require("@mantine/core");
var import_react6 = require("next-auth/react");
var import_link = __toESM(require("next/link"));
var import_router2 = require("next/router");
var import_react7 = __toESM(require("react"));

// src/pages/_app.tsx
var queryClient = new import_react_query2.QueryClient();

// src/pages/categories.tsx
var categories = () => {
  const { data: categories2, isLoading: categoriesLoading } = useGetCategories();
  const [value, setValue] = (0, import_react12.useState)(null);
  const [selectData, setSelectData] = (0, import_react12.useState)([]);
  const [selectValue, setSelectValue] = (0, import_react12.useState)();
  const [filteredValues, setFilteredValues] = (0, import_react12.useState)();
  const [createModal, setCreateModal] = (0, import_react12.useState)(false);
  const [deleteModal, setDeleteModal] = (0, import_react12.useState)(false);
  const [changeModal, setChangeModal] = (0, import_react12.useState)(false);
  (0, import_react12.useEffect)(() => {
    setSelectData([]);
    if (categories2) {
      categories2.map(
        (ctg) => setSelectData((selectData2) => [...selectData2, ctg.name])
      );
    }
  }, [categories2]);
  (0, import_react12.useEffect)(() => {
    if (selectValue) {
      setFilteredValues(categories2?.filter((ctg) => ctg.name === selectValue));
    } else {
      setFilteredValues(categories2);
    }
  }, [selectValue, categories2]);
  const [selectedCategory, setSelectedCategory] = (0, import_react12.useState)("");
  const createCategoryForm = (0, import_form.useForm)({
    validate: (0, import_form.zodResolver)(PostCategorySchema),
    initialValues: {
      name: ""
    }
  });
  const { mutate: postCategory2, isLoading: postCategoryLoading } = usePostCategory();
  const { mutate: deleteCategory2, isLoading: deleteCategoryLoading } = useDeleteCategory();
  const PatchCategoryForm = (0, import_form.useForm)({
    validate: (0, import_form.zodResolver)(PatchCategorySchema),
    initialValues: {
      name: "",
      id: ""
    }
  });
  const { mutate: patchCategory2, isLoading: patchCategoryLoading } = usePatchCategory();
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_core5.Group, { align: "center", mb: "3rem" }, /* @__PURE__ */ React.createElement(import_core5.Title, { size: "1.5rem", weight: "500" }, "Suas categorias"), /* @__PURE__ */ React.createElement(import_core5.ThemeIcon, { variant: "light", color: "green", size: "md" }, /* @__PURE__ */ React.createElement(BiCategory, { size: 25 }))), /* @__PURE__ */ React.createElement(
    import_core5.Select,
    {
      data: selectData,
      value: selectValue,
      onChange: setSelectValue,
      clearable: true,
      searchable: true,
      placeholder: "Seach Something...",
      nothingFound: "No Categories Found",
      icon: /* @__PURE__ */ React.createElement(FiSearch, null),
      transition: "pop-top-left",
      transitionDuration: 80,
      transitionTimingFunction: "easeInOut",
      sx: { maxWidth: "600px" },
      mb: "1.5rem"
    }
  ), categories2?.length === 0 && !categoriesLoading && /* @__PURE__ */ React.createElement(import_core5.Box, null, /* @__PURE__ */ React.createElement(import_core5.Group, { align: "center" }, /* @__PURE__ */ React.createElement(import_core5.Text, { size: "lg" }, "No Invetory"), /* @__PURE__ */ React.createElement(FiSearch, { size: 20, style: { transform: "translateY(-1.5px)" } }))), /* @__PURE__ */ React.createElement(
    import_core5.Skeleton,
    {
      mb: "3rem",
      visible: categoriesLoading ? true : false,
      style: { minHeight: "80px" }
    },
    /* @__PURE__ */ React.createElement(import_core5.Accordion, { value, onChange: setValue, transitionDuration: 500 }, filteredValues?.map((category, index) => /* @__PURE__ */ React.createElement(
      import_core5.Accordion.Item,
      {
        value: category.name,
        sx: { overflowX: "auto" },
        key: index
      },
      /* @__PURE__ */ React.createElement(import_core5.Accordion.Control, null, category.name),
      /* @__PURE__ */ React.createElement(
        import_core5.Accordion.Panel,
        {
          sx: {
            width: "max-content",
            minWidth: "100%"
          }
        },
        /* @__PURE__ */ React.createElement(import_core5.Table, { verticalSpacing: "md", horizontalSpacing: "md" }, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", { style: { paddingLeft: "0" } }, "Nome"), /* @__PURE__ */ React.createElement("th", { style: { paddingLeft: "0" } }, "Pre\xE7o"), /* @__PURE__ */ React.createElement("th", { style: { paddingLeft: "0" } }, "Id"), /* @__PURE__ */ React.createElement("th", { style: { paddingLeft: "0" } }, "\xDAltima atualiza\xE7\xE3o"), /* @__PURE__ */ React.createElement("th", { style: { paddingLeft: "0" } }, "Estoque"))), category?.products?.map((product) => /* @__PURE__ */ React.createElement("tr", { key: product.name }, /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", { style: { paddingRight: "1rem" } }, product.name)), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", { style: { paddingRight: "1rem" } }, product.price)), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", { style: { paddingRight: "1rem" } }, product.id)), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", { style: { paddingRight: "1rem" } }, product.lastUpdated.toString())), /* @__PURE__ */ React.createElement("td", null, /* @__PURE__ */ React.createElement("div", { style: { paddingRight: "1rem" } }, product?.date[0]?.stock))))),
        /* @__PURE__ */ React.createElement(import_core5.Group, null, /* @__PURE__ */ React.createElement(
          import_core5.Button,
          {
            mt: "1.5rem",
            color: "blue",
            onClick: () => {
              PatchCategoryForm.values.name = category.name;
              setChangeModal(true);
              setSelectedCategory(category.id);
            }
          },
          "Alterar detalhes"
        ), /* @__PURE__ */ React.createElement(
          import_core5.Button,
          {
            mt: "1.5rem",
            color: "red",
            onClick: () => {
              setDeleteModal(true);
              setSelectedCategory(category.id);
            }
          },
          "Delete"
        ))
      )
    )))
  ), /* @__PURE__ */ React.createElement(import_core5.Box, null, /* @__PURE__ */ React.createElement(
    import_core5.Button,
    {
      color: "blue",
      variant: "outline",
      onClick: () => setCreateModal(true)
    },
    "Criar Categoria"
  )), /* @__PURE__ */ React.createElement(
    import_core5.Modal,
    {
      centered: true,
      opened: createModal,
      onClose: () => setCreateModal(false),
      title: "Criar Categoria"
    },
    /* @__PURE__ */ React.createElement(
      "form",
      {
        onSubmit: createCategoryForm.onSubmit(
          (values) => console.log(values)
        )
      },
      /* @__PURE__ */ React.createElement(
        import_core5.LoadingOverlay,
        {
          transitionDuration: 500,
          visible: postCategoryLoading ? true : false
        }
      ),
      /* @__PURE__ */ React.createElement(
        import_core5.TextInput,
        {
          placeholder: "Nome da Categoria",
          label: "Nome da Categoria",
          withAsterisk: true,
          mb: "1rem",
          ...createCategoryForm.getInputProps("name")
        }
      ),
      /* @__PURE__ */ React.createElement(import_core5.Group, { noWrap: false }, /* @__PURE__ */ React.createElement(
        import_core5.Button,
        {
          type: "submit",
          onClick: () => postCategory2(
            { name: createCategoryForm.values.name },
            {
              onSuccess: () => {
                setCreateModal(false);
                queryClient.refetchQueries(["categories"]);
              }
            }
          )
        },
        "Criar"
      ), /* @__PURE__ */ React.createElement(import_core5.Button, { color: "red", onClick: () => setCreateModal(false) }, "Sair"))
    )
  ), /* @__PURE__ */ React.createElement(
    import_core5.Modal,
    {
      centered: true,
      opened: deleteModal,
      onClose: () => setDeleteModal(false),
      title: "Delete Category"
    },
    /* @__PURE__ */ React.createElement(import_core5.LoadingOverlay, { visible: deleteCategoryLoading ? true : false }),
    /* @__PURE__ */ React.createElement(import_core5.Group, { align: "center", mb: "1rem" }, /* @__PURE__ */ React.createElement(MdWarningAmber, { size: 25, color: "#fa5252" }), /* @__PURE__ */ React.createElement(import_core5.Title, { color: "red", size: "md" }, "You Cannot Undo This Action!")),
    /* @__PURE__ */ React.createElement(import_core5.Text, { mb: "1rem", color: "red", weight: 600 }, "All Products In This Category Will Be Deleted!"),
    /* @__PURE__ */ React.createElement(import_core5.Group, { noWrap: false }, /* @__PURE__ */ React.createElement(import_core5.Button, { onClick: () => setDeleteModal(false) }, "Exit"), /* @__PURE__ */ React.createElement(
      import_core5.Button,
      {
        color: "red",
        onClick: () => deleteCategory2(selectedCategory, {
          onSuccess: () => {
            queryClient.refetchQueries(["categories"]);
            setDeleteModal(false);
          }
        })
      },
      "Deletar !"
    ))
  ), /* @__PURE__ */ React.createElement(
    import_core5.Modal,
    {
      centered: true,
      opened: changeModal,
      onClose: () => setChangeModal(false),
      title: "Change Category Details"
    },
    /* @__PURE__ */ React.createElement(
      "form",
      {
        onSubmit: PatchCategoryForm.onSubmit((values) => console.log(values))
      },
      /* @__PURE__ */ React.createElement(
        import_core5.LoadingOverlay,
        {
          transitionDuration: 500,
          visible: patchCategoryLoading ? true : false
        }
      ),
      /* @__PURE__ */ React.createElement(
        import_core5.TextInput,
        {
          placeholder: "Category name",
          label: "Category name",
          withAsterisk: true,
          mb: "1rem",
          ...PatchCategoryForm.getInputProps("name")
        }
      ),
      /* @__PURE__ */ React.createElement(import_core5.Group, { mt: "1.5rem" }, /* @__PURE__ */ React.createElement(
        import_core5.Button,
        {
          type: "submit",
          onClick: () => {
            patchCategory2(
              {
                name: PatchCategoryForm.values.name,
                id: selectedCategory
              },
              {
                onSuccess: () => {
                  queryClient.refetchQueries(["categories"]);
                  setChangeModal(false);
                }
              }
            );
          }
        },
        "Alterar detalhes"
      ), /* @__PURE__ */ React.createElement(
        import_core5.Button,
        {
          color: "red",
          onClick: () => {
            setChangeModal(false);
          }
        },
        "Sa\xEDda"
      ))
    )
  ));
};
categories.requireAuth = true;
var categories_default = categories;
