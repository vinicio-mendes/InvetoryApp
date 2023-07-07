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

// src/pages/inventory.tsx
var inventory_exports = {};
__export(inventory_exports, {
  default: () => inventory_default
});
module.exports = __toCommonJS(inventory_exports);
var import_core5 = require("@mantine/core");
var import_dates = require("@mantine/dates");
var import_form = require("@mantine/form");
var import_luxon = require("luxon");
var import_link2 = __toESM(require("next/link"));
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

// node_modules/react-icons/bs/index.esm.js
function BsBox(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" } }] })(props);
}

// node_modules/react-icons/fi/index.esm.js
function FiSearch(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "circle", "attr": { "cx": "11", "cy": "11", "r": "8" } }, { "tag": "line", "attr": { "x1": "21", "y1": "21", "x2": "16.65", "y2": "16.65" } }] })(props);
}

// src/queries/DateQueries.ts
var import_react_query = require("@tanstack/react-query");

// src/config/axios.ts
var import_axios = __toESM(require("axios"));
var axios_default = import_axios.default.create({
  baseURL: "http://localhost:3000/api/",
  withCredentials: true
});

// src/queries/DateQueries.ts
var postDate = async (props) => {
  const response = await axios_default.post("date", props);
  return response.data;
};
var deleteDate = async ({
  productId,
  id
}) => {
  const response = await axios_default.delete(`date`, { data: { productId, id } });
  return response.data;
};
var usePostDate = () => (0, import_react_query.useMutation)(["postDate"], postDate);
var useDeleteDate = () => (0, import_react_query.useMutation)(["deleteDate"], deleteDate);

// src/queries/ProductQueries.ts
var import_react_query2 = require("@tanstack/react-query");
var getProducts = async (params) => {
  const response = await axios_default.get("products", { params });
  return response?.data;
};
var useGetProducts = (params) => (0, import_react_query2.useQuery)(["products"], () => getProducts(params), { enabled: true });

// src/types/deleteDate.ts
var import_zod = require("zod");
var DeleteDateSchema = import_zod.z.object({
  productId: import_zod.z.string().min(1, { message: "Id should have at least 1 letter" }),
  id: import_zod.z.string().min(1, { message: "Id should have at least 1 letter" })
});

// src/types/postDate.ts
var import_zod2 = require("zod");
var PostDateSchema = import_zod2.z.object({
  productId: import_zod2.z.string().min(1, { message: "Id should have at least 1 letter" }),
  date: import_zod2.z.date().optional(),
  stock: import_zod2.z.number().min(0, { message: "Stock should be greater than 0" }).positive({ message: "Stock should be positive" })
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

// src/pages/inventory.tsx
var inventory = () => {
  const { data: products, isLoading: productsLoading } = useGetProducts({
    take: "20",
    dates: "50"
  });
  const [autoCompleteOption, setAutoCompleteOptions] = (0, import_react12.useState)([]);
  const [autoCompleteValue, setAutoCompleteValue] = (0, import_react12.useState)();
  const [filteredProducts, setFilteredProducts] = (0, import_react12.useState)([]);
  const [sortBy, setSortBy] = (0, import_react12.useState)("name");
  (0, import_react12.useEffect)(() => {
    setAutoCompleteOptions([]);
    if (products) {
      products.map(
        (prod) => setAutoCompleteOptions((selectData) => [...selectData, prod.name])
      );
    }
    setFilteredProducts(products);
  }, [products]);
  (0, import_react12.useEffect)(() => {
    if (autoCompleteValue && products) {
      setFilteredProducts(
        (products2) => products2?.filter(
          (prod) => prod.name.toLowerCase().includes(autoCompleteValue.toLowerCase())
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [autoCompleteValue, sortBy]);
  const [changeCurrentInventoryModal, setChangeCurrentInventoryModal] = (0, import_react12.useState)(false);
  const [invetoryChangesModal, setInvetoryChangesModal] = (0, import_react12.useState)(false);
  const patchInventoryForm = (0, import_form.useForm)({
    validate: (0, import_form.zodResolver)(PostDateSchema),
    initialValues: {
      productId: "",
      date: /* @__PURE__ */ new Date(),
      stock: 0
    }
  });
  const deleteInventoryForm = (0, import_form.useForm)({
    validate: (0, import_form.zodResolver)(DeleteDateSchema),
    initialValues: {
      productId: "",
      id: ""
    }
  });
  const { mutate: PostDate, isLoading: PostDateLoading } = usePostDate();
  const { mutate: DeleteDate, isLoading: DeleteDateLoading } = useDeleteDate();
  const [selectedProduct, setSelectedProduct] = (0, import_react12.useState)();
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_core5.Group, { align: "center", mb: "3rem" }, /* @__PURE__ */ React.createElement(import_core5.Title, { size: "1.5rem", weight: "500" }, "Seu invent\xE1rio"), /* @__PURE__ */ React.createElement(import_core5.ThemeIcon, { variant: "light", color: "violet", size: "md" }, /* @__PURE__ */ React.createElement(BsBox, { size: 22 }))), /* @__PURE__ */ React.createElement(import_core5.Group, { align: "center", mb: "1.5rem" }, /* @__PURE__ */ React.createElement(
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
  )), products?.length === 0 && !productsLoading && /* @__PURE__ */ React.createElement(import_core5.Box, null, /* @__PURE__ */ React.createElement(import_core5.Group, { align: "center" }, /* @__PURE__ */ React.createElement(import_core5.Text, { size: "lg" }, "No Invetory"), /* @__PURE__ */ React.createElement(BsBox, { size: 20, style: { transform: "translateY(-1.5px)" } })), /* @__PURE__ */ React.createElement(import_link2.default, { passHref: true, href: "/products" }, /* @__PURE__ */ React.createElement(import_core5.Button, { component: "a", mt: "3rem", variant: "outline" }, "Criar um Produto"))), /* @__PURE__ */ React.createElement(
    import_core5.Skeleton,
    {
      visible: productsLoading,
      sx: { minHeight: products?.length === 0 ? "0px" : "150px" }
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
              onClick: () => {
                patchInventoryForm.setFieldValue(
                  "productId",
                  product.id
                );
                patchInventoryForm.setFieldValue(
                  "stock",
                  product.date[0]?.stock
                );
                setChangeCurrentInventoryModal(true);
              }
            },
            "Alterar atual invent\xE1rio"
          ), /* @__PURE__ */ React.createElement(
            import_core5.Button,
            {
              color: "violet",
              onClick: () => {
                setInvetoryChangesModal(true);
                setSelectedProduct(product);
                deleteInventoryForm.setFieldValue(
                  "productId",
                  product.id
                );
                deleteInventoryForm.setFieldValue(
                  "id",
                  product.date[0]?.id
                );
              }
            },
            "Mudan\xE7as de invent\xE1rio"
          ))
        )
      );
    }))
  ), /* @__PURE__ */ React.createElement(
    import_core5.Modal,
    {
      opened: changeCurrentInventoryModal,
      onClose: () => setChangeCurrentInventoryModal(false),
      title: "Atualiza\xE7\xE3o de Invent\xE1rio",
      centered: true
    },
    /* @__PURE__ */ React.createElement(
      "form",
      {
        onSubmit: patchInventoryForm.onSubmit(() => {
          PostDate(
            {
              productId: patchInventoryForm.values.productId,
              date: patchInventoryForm.values.date,
              stock: patchInventoryForm.values.stock
            },
            {
              onSuccess: () => {
                setChangeCurrentInventoryModal(false);
                queryClient.refetchQueries(["products"]);
              }
            }
          );
        })
      },
      /* @__PURE__ */ React.createElement(import_core5.LoadingOverlay, { visible: PostDateLoading, transitionDuration: 500 }),
      /* @__PURE__ */ React.createElement(
        import_core5.NumberInput,
        {
          placeholder: "N\xFAmero de estoque",
          label: "Estoque",
          withAsterisk: true,
          mb: "1rem",
          ...patchInventoryForm.getInputProps("stock")
        }
      ),
      /* @__PURE__ */ React.createElement(
        import_dates.DatePicker,
        {
          placeholder: "Pick date",
          label: "Data do evento",
          labelFormat: "MM/YYYY",
          mb: "1rem",
          maxDate: /* @__PURE__ */ new Date(),
          ...patchInventoryForm.getInputProps("date")
        }
      ),
      /* @__PURE__ */ React.createElement(import_core5.Group, null, /* @__PURE__ */ React.createElement(import_core5.Button, { color: "blue", type: "submit" }, "Atualizar invent\xE1rio"), /* @__PURE__ */ React.createElement(
        import_core5.Button,
        {
          color: "red",
          onClick: () => setChangeCurrentInventoryModal(false)
        },
        "Exit"
      ))
    )
  ), /* @__PURE__ */ React.createElement(
    import_core5.Modal,
    {
      opened: invetoryChangesModal,
      onClose: () => setInvetoryChangesModal(false),
      title: `\xDAltimas ${selectedProduct?.date.length} altera\xE7\xF5es de invent\xE1rio`,
      centered: true,
      overflow: "inside"
    },
    /* @__PURE__ */ React.createElement(import_core5.Stack, null, selectedProduct?.date.map((date) => {
      return /* @__PURE__ */ React.createElement(
        "form",
        {
          onSubmit: deleteInventoryForm.onSubmit(
            (values) => DeleteDate(
              {
                id: date.id,
                productId: values.productId
              },
              {
                onSuccess: () => {
                  queryClient.invalidateQueries(["products"]);
                  setInvetoryChangesModal(false);
                }
              }
            )
          ),
          key: date.id
        },
        /* @__PURE__ */ React.createElement(
          import_core5.LoadingOverlay,
          {
            visible: DeleteDateLoading,
            transitionDuration: 300
          }
        ),
        /* @__PURE__ */ React.createElement(
          import_core5.Stack,
          {
            spacing: "xs",
            pb: "md",
            sx: (theme) => ({
              borderBottom: theme.colorScheme === "dark" ? `1px solid ${theme.colors.dark[2]}` : `1px solid ${theme.colors.gray[9]}`
            })
          },
          /* @__PURE__ */ React.createElement(import_core5.Group, null, /* @__PURE__ */ React.createElement(import_core5.Text, { size: "md" }, "Date: ", import_luxon.DateTime.fromISO(date?.date).toISODate()), /* @__PURE__ */ React.createElement(import_core5.Text, { size: "md", weight: "600" }, "Estoque: ", date.stock)),
          /* @__PURE__ */ React.createElement(
            import_core5.Button,
            {
              color: "red",
              type: "submit",
              sx: { width: "min-content" }
            },
            "Delete"
          )
        )
      );
    }), selectedProduct?.date.length === 0 && /* @__PURE__ */ React.createElement(import_core5.Text, null, "Nenhuma altera\xE7\xE3o no invent\xE1rio encontrada"))
  ));
};
inventory.requireAuth = true;
var inventory_default = inventory;
