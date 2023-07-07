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

// src/pages/products.tsx
var products_exports = {};
__export(products_exports, {
  default: () => products_default
});
module.exports = __toCommonJS(products_exports);
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

// node_modules/react-icons/fi/index.esm.js
function FiSearch(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "11", "cy": "11", "r": "8" } }, { "tag": "line", "attr": { "x1": "21", "y1": "21", "x2": "16.65", "y2": "16.65" } }] })(props);
}

// node_modules/react-icons/tb/index.esm.js
function TbClipboardList(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "strokeWidth": "2", "stroke": "currentColor", "fill": "none", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "desc", "attr": {}, "child": [] }, { "tag": "path", "attr": { "stroke": "none", "d": "M0 0h24v24H0z", "fill": "none" } }, { "tag": "path", "attr": { "d": "M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" } }, { "tag": "rect", "attr": { "x": "9", "y": "3", "width": "6", "height": "4", "rx": "2" } }, { "tag": "line", "attr": { "x1": "9", "y1": "12", "x2": "9.01", "y2": "12" } }, { "tag": "line", "attr": { "x1": "13", "y1": "12", "x2": "15", "y2": "12" } }, { "tag": "line", "attr": { "x1": "9", "y1": "16", "x2": "9.01", "y2": "16" } }, { "tag": "line", "attr": { "x1": "13", "y1": "16", "x2": "15", "y2": "16" } }] })(props);
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
var getCategoriesId = async () => {
  const { data } = await axios_default.get("/categories/id");
  return data;
};
var useGetCategoriesId = () => (0, import_react_query.useQuery)(["categoriesId"], getCategoriesId);

// src/queries/ProductQueries.ts
var import_react_query2 = require("@tanstack/react-query");
var getProducts = async (params) => {
  const response = await axios_default.get("products", { params });
  return response?.data;
};
var postProduct = async (props) => {
  const response = await axios_default.post("product", props);
  return response?.data;
};
var deleteProduct = async (id) => {
  const response = await axios_default.delete(`product`, { params: { id } });
  return response?.data;
};
var patchProduct = async (props) => {
  const response = await axios_default.patch(`product`, props);
  return response?.data;
};
var useGetProducts = (params) => (0, import_react_query2.useQuery)(["products"], () => getProducts(params), { enabled: true });
var usePostProduct = () => (0, import_react_query2.useMutation)(["product"], postProduct);
var useDeleteProduct = () => (0, import_react_query2.useMutation)(["product"], deleteProduct);
var usePatchProdcuts = () => (0, import_react_query2.useMutation)(["product"], patchProduct);

// src/types/patchProduct.ts
var import_zod = require("zod");
var patchProductSchema = import_zod.z.object({
  id: import_zod.z.string().min(1, { message: "Id should have at least 1 letter" }),
  name: import_zod.z.string().min(1, { message: "Name is required" }).optional(),
  description: import_zod.z.string().min(1, { message: "Description is required" }).optional(),
  price: import_zod.z.number().min(0, { message: "Price should be greater than 0" }).optional(),
  Date: import_zod.z.object({
    date: import_zod.z.date().optional(),
    stock: import_zod.z.number().optional()
  }).optional(),
  categoryId: import_zod.z.string().min(0, { message: "ID is required" }).optional()
});

// src/types/postProduct.ts
var import_zod2 = require("zod");
var postProductSchema = import_zod2.z.object({
  name: import_zod2.z.string().min(1, { message: "Name is required" }),
  price: import_zod2.z.number().min(0, { message: "Price must be greater than 0" }),
  description: import_zod2.z.string().min(1, { message: "Description is required" }),
  categoryId: import_zod2.z.string().min(1, { message: "Category is required" })
});

// src/pages/_app.tsx
var import_core4 = require("@mantine/core");
var import_react_query3 = require("@tanstack/react-query");
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
var queryClient = new import_react_query3.QueryClient();

// src/pages/products.tsx
var products = () => {
  const { data: products2, isLoading: productsLoading } = useGetProducts({
    take: "20"
  });
  const [autoCompleteOption, setAutoCompleteOptions] = (0, import_react12.useState)([]);
  const [autoCompleteValue, setAutoCompleteValue] = (0, import_react12.useState)();
  const [filteredProducts, setFilteredProducts] = (0, import_react12.useState)([]);
  const [sortBy, setSortBy] = (0, import_react12.useState)("name");
  (0, import_react12.useEffect)(() => {
    setAutoCompleteOptions([]);
    if (products2) {
      products2.map(
        (prod) => setAutoCompleteOptions((selectData) => [...selectData, prod.name])
      );
    }
    setFilteredProducts(products2);
  }, [products2]);
  (0, import_react12.useEffect)(() => {
    if (autoCompleteValue && products2) {
      setFilteredProducts(
        (products3) => products3?.filter(
          (prod) => prod.name.toLowerCase().includes(autoCompleteValue.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products2);
    }
  }, [autoCompleteValue, sortBy]);
  const [selectedProductId, setSelectedProductId] = (0, import_react12.useState)("");
  const [selectedProduct, setSelectedProduct] = (0, import_react12.useState)("");
  const [postProductModal, setPostModalProduct] = (0, import_react12.useState)(false);
  const [deleteProductModal, setDeleteProductModal] = (0, import_react12.useState)(false);
  const [patchProductModal, setPatchProductModal] = (0, import_react12.useState)(false);
  const postProductForm = (0, import_form.useForm)({
    validate: (0, import_form.zodResolver)(postProductSchema),
    initialValues: {
      name: "",
      price: 0,
      description: "",
      categoryId: ""
    }
  });
  const patchProductForm = (0, import_form.useForm)({
    validate: (0, import_form.zodResolver)(patchProductSchema),
    initialValues: {
      id: "",
      name: "",
      price: 0,
      description: "",
      categoryId: ""
    }
  });
  const { data: categories, isLoading: categoriesLoading } = useGetCategoriesId();
  const [selectCategory, setSelectCategory] = (0, import_react12.useState)([]);
  (0, import_react12.useEffect)(() => {
    if (categories) {
      setSelectCategory([]);
      categories.map(
        (cat) => setSelectCategory((selectData) => [
          ...selectData,
          { value: cat.id, label: cat.name }
        ])
      );
    }
  }, [categories]);
  const { mutate: postProduct2, isLoading: postProductLoading } = usePostProduct();
  const { mutate: deleteProduct2, isLoading: deleteProductLoading } = useDeleteProduct();
  const { mutate: patchProduct2, isLoading: patchProductLoading } = usePatchProdcuts();
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_core5.Group, { align: "center", mb: "3rem" }, /* @__PURE__ */ React.createElement(import_core5.Title, { size: "1.5rem", weight: "500" }, "Seus produtos"), /* @__PURE__ */ React.createElement(import_core5.ThemeIcon, { variant: "light", color: "grape", size: "md" }, /* @__PURE__ */ React.createElement(TbClipboardList, { size: 22 }))), /* @__PURE__ */ React.createElement(import_core5.Group, { align: "center", mb: "1.5rem" }, /* @__PURE__ */ React.createElement(
    import_core5.Autocomplete,
    {
      data: autoCompleteOption,
      value: autoCompleteValue,
      onChange: setAutoCompleteValue,
      placeholder: "Search by Product Name...",
      nothingFound: "No Products Found",
      icon: /* @__PURE__ */ React.createElement(FiSearch, null),
      transition: "pop-top-left",
      transitionDuration: 80,
      transitionTimingFunction: "easeInOut",
      sx: { maxWidth: "600px", width: "100%" }
    }
  )), products2?.length === 0 && !productsLoading && /* @__PURE__ */ React.createElement(import_core5.Group, { align: "center" }, /* @__PURE__ */ React.createElement(import_core5.Text, { size: "lg" }, "No Products"), /* @__PURE__ */ React.createElement(
    TbClipboardList,
    {
      size: 20,
      style: { transform: "translateY(-1.5px)" }
    }
  )), /* @__PURE__ */ React.createElement(
    import_core5.Skeleton,
    {
      visible: productsLoading,
      sx: { minHeight: products2?.length === 0 ? "0px" : "150px" }
    },
    /* @__PURE__ */ React.createElement(import_core5.Grid, { grow: true, gutter: "sm", sx: { height: "100%" } }, filteredProducts?.map((product) => {
      return /* @__PURE__ */ React.createElement(
        import_core5.Col,
        {
          span: 3,
          order: 2,
          orderSm: 1,
          orderLg: 3,
          key: product.id,
          sx: {
            minWidth: "340px",
            "@media (max-width: 350px)": {
              minWidth: "100%"
            }
          }
        },
        /* @__PURE__ */ React.createElement(
          import_core5.Paper,
          {
            p: "xl",
            shadow: "lg",
            sx: {
              display: "flex",
              flexDirection: "column",
              height: "100%"
            }
          },
          /* @__PURE__ */ React.createElement(import_core5.Title, { order: 3 }, product.name),
          /* @__PURE__ */ React.createElement(
            import_core5.Title,
            {
              order: 5,
              weight: "400",
              mb: "sm",
              color: "gray",
              variant: "text",
              sx: (theme) => ({
                color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[6]
              })
            },
            product.category.name
          ),
          /* @__PURE__ */ React.createElement(
            import_core5.Text,
            {
              sx: (theme) => ({
                color: theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[9]
              }),
              mt: "sm",
              mb: "sm"
            },
            product.description
          ),
          /* @__PURE__ */ React.createElement(
            import_core5.Group,
            {
              spacing: "md",
              noWrap: true,
              mb: "1.5rem",
              sx: { height: "100%" }
            },
            /* @__PURE__ */ React.createElement(import_core5.Stack, { sx: { width: "100%", alignSelf: "flex-end" } }, /* @__PURE__ */ React.createElement(import_core5.Text, null, "Pre\xE7o atual"), /* @__PURE__ */ React.createElement(import_core5.Text, null, product.price, "$")),
            /* @__PURE__ */ React.createElement(import_core5.Stack, { sx: { width: "100%", alignSelf: "flex-end" } }, /* @__PURE__ */ React.createElement(import_core5.Text, null, "Estoque atual"), /* @__PURE__ */ React.createElement(import_core5.Text, null, product?.date[0] ? product?.date[0]?.stock : "0"))
          ),
          /* @__PURE__ */ React.createElement(import_core5.Group, null, /* @__PURE__ */ React.createElement(
            import_core5.Button,
            {
              color: "blue",
              onClick: () => {
                setPatchProductModal(true);
                patchProductForm.setValues({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  description: product.description ?? "",
                  categoryId: product.categoryId
                });
              }
            },
            "Alterar detalhes"
          ), /* @__PURE__ */ React.createElement(
            import_core5.Button,
            {
              color: "red",
              onClick: () => {
                setDeleteProductModal(true);
                setSelectedProductId(product.id);
                setSelectedProduct(product.name);
              }
            },
            "Deletar"
          ))
        )
      );
    }))
  ), /* @__PURE__ */ React.createElement(import_core5.Box, { mt: "3rem" }, /* @__PURE__ */ React.createElement(import_core5.Button, { variant: "outline", onClick: () => setPostModalProduct(true) }, "Criar Produto")), /* @__PURE__ */ React.createElement(
    import_core5.Modal,
    {
      onClose: () => setPostModalProduct(false),
      opened: postProductModal,
      centered: true,
      title: "Cria\xE7\xE3o de Produto"
    },
    /* @__PURE__ */ React.createElement(
      "form",
      {
        onSubmit: postProductForm.onSubmit((values) => {
          postProduct2(
            {
              categoryId: values.categoryId,
              description: values.description,
              name: values.name,
              price: values.price
            },
            {
              onSuccess: () => {
                setPostModalProduct(false);
                queryClient.refetchQueries(["products"]);
              }
            }
          );
        })
      },
      /* @__PURE__ */ React.createElement(
        import_core5.LoadingOverlay,
        {
          visible: postProductLoading,
          transitionDuration: 300
        }
      ),
      /* @__PURE__ */ React.createElement(
        import_core5.TextInput,
        {
          placeholder: "Nome do Produto",
          label: "Name",
          withAsterisk: true,
          mb: "md",
          ...postProductForm.getInputProps("name")
        }
      ),
      /* @__PURE__ */ React.createElement(
        import_core5.NumberInput,
        {
          placeholder: 0,
          label: "Pre\xE7o",
          withAsterisk: true,
          precision: 2,
          step: 0.5,
          mb: "md",
          ...postProductForm.getInputProps("price")
        }
      ),
      /* @__PURE__ */ React.createElement(
        import_core5.Textarea,
        {
          placeholder: "Descri\xE7\xE3o do Produto",
          label: "Descri\xE7\xE3o",
          withAsterisk: true,
          mb: "md",
          ...postProductForm.getInputProps("description")
        }
      ),
      /* @__PURE__ */ React.createElement(
        import_core5.Select,
        {
          label: "Categorias",
          data: selectCategory,
          mb: "md",
          placeholder: "Selecionar Categoria",
          withAsterisk: true,
          ...postProductForm.getInputProps("categoryId")
        }
      ),
      /* @__PURE__ */ React.createElement(import_core5.Group, null, /* @__PURE__ */ React.createElement(import_core5.Button, { color: "blue", type: "submit" }, "Criar Produto"), /* @__PURE__ */ React.createElement(import_core5.Button, { color: "red", onClick: () => setPostModalProduct(false) }, "Sair"))
    )
  ), /* @__PURE__ */ React.createElement(
    import_core5.Modal,
    {
      onClose: () => setDeleteProductModal(false),
      opened: deleteProductModal,
      centered: true,
      title: "Product Deletion"
    },
    /* @__PURE__ */ React.createElement(
      "form",
      {
        onSubmit: (e) => {
          e.preventDefault();
          deleteProduct2(selectedProductId, {
            onSuccess: () => {
              setDeleteProductModal(false);
              queryClient.refetchQueries(["products"]);
            }
          });
        }
      },
      /* @__PURE__ */ React.createElement(import_core5.LoadingOverlay, { visible: deleteProductLoading }),
      /* @__PURE__ */ React.createElement(import_core5.Text, { align: "center", color: "red", size: "md" }, "Are you sure you want to delete"),
      /* @__PURE__ */ React.createElement(import_core5.Text, { mb: "xl", align: "center", weight: "600" }, selectedProduct, "?"),
      /* @__PURE__ */ React.createElement(import_core5.Center, null, /* @__PURE__ */ React.createElement(import_core5.Group, null, /* @__PURE__ */ React.createElement(import_core5.Button, { color: "red", type: "submit" }, "Excluir Produto"), /* @__PURE__ */ React.createElement(import_core5.Button, { color: "blue", onClick: () => setDeleteProductModal(false) }, "Exit")))
    )
  ), /* @__PURE__ */ React.createElement(
    import_core5.Modal,
    {
      onClose: () => setPatchProductModal(false),
      opened: patchProductModal,
      centered: true,
      title: "Atualiza\xE7\xE3o do Produto"
    },
    /* @__PURE__ */ React.createElement(
      "form",
      {
        onSubmit: patchProductForm.onSubmit(() => {
          patchProduct2(
            {
              id: patchProductForm.values.id,
              name: patchProductForm.values.name,
              price: patchProductForm.values.price,
              description: patchProductForm.values.description,
              categoryId: patchProductForm.values.categoryId
            },
            {
              onSuccess: () => {
                setPatchProductModal(false);
                queryClient.refetchQueries(["products"]);
              }
            }
          );
        })
      },
      /* @__PURE__ */ React.createElement(
        import_core5.LoadingOverlay,
        {
          visible: patchProductLoading,
          transitionDuration: 300
        }
      ),
      /* @__PURE__ */ React.createElement(
        import_core5.TextInput,
        {
          label: "Name",
          placeholder: "Product Name",
          mb: "md",
          ...patchProductForm.getInputProps("name")
        }
      ),
      /* @__PURE__ */ React.createElement(
        import_core5.Textarea,
        {
          label: "Description",
          placeholder: "Product Description",
          mb: "md",
          ...patchProductForm.getInputProps("description")
        }
      ),
      /* @__PURE__ */ React.createElement(
        import_core5.NumberInput,
        {
          label: "Price",
          placeholder: "Product Price",
          mb: "md",
          precision: 2,
          step: 0.5,
          ...patchProductForm.getInputProps("price")
        }
      ),
      /* @__PURE__ */ React.createElement(
        import_core5.Select,
        {
          label: "Categories",
          data: selectCategory,
          mb: "md",
          placeholder: "Select Category",
          ...patchProductForm.getInputProps("categoryId")
        }
      ),
      /* @__PURE__ */ React.createElement(import_core5.Group, null, /* @__PURE__ */ React.createElement(import_core5.Button, { type: "submit" }, "Alterar Detalhes"), /* @__PURE__ */ React.createElement(import_core5.Button, { color: "red", onClick: () => setPatchProductModal(false) }, "Exit"))
    )
  ));
};
products.requireAuth = true;
var products_default = products;
