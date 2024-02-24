import { URL_DATATABLE_LIST_GET } from "@app/catalogs/uriCatalog";

const RESOPNSE_DATATABLE_LIST_GET: any[] = [
  { "id": 1, "answer": true,   "currency": 1234567,        "currencyZeroPad": 1234567,       "currencySymbol": 1234567,        "currencyComma": 1234567,       "currencyInteger": 1234567,       "currencyAllOptions": 1234567 },
  { "id": 2, "answer": false,  "currency": 8775456.21,     "currencyZeroPad": 8775456.21,    "currencySymbol": 8775456.21,     "currencyComma": 8775456.21,    "currencyInteger": 8775456.21,    "currencyAllOptions": 8775456.21 },
  { "id": 3, "answer": null,   "currency": 45666767.6777,  "currencyZeroPad": 45666767.6777, "currencySymbol": 45666767.6777,  "currencyComma": 45666767.6777, "currencyInteger": 45666767.6777, "currencyAllOptions": 45666767.6777 },
  { "id": 4, "answer": null,   "currency": null,           "currencyZeroPad": null,          "currencySymbol": null,           "currencyComma": null,          "currencyInteger": null,          "currencyAllOptions": null },
  { "id": 5, "answer": true,   "currency": 1234567,        "currencyZeroPad": 1234567,       "currencySymbol": 1234567,        "currencyComma": 1234567,       "currencyInteger": 1234567,       "currencyAllOptions": 1234567 },
  { "id": 6, "answer": false,  "currency": 8775456.21,     "currencyZeroPad": 8775456.21,    "currencySymbol": 8775456.21,     "currencyComma": 8775456.21,    "currencyInteger": 8775456.21,    "currencyAllOptions": 8775456.21 },
  { "id": 7, "answer": null,   "currency": 45666767.6777,  "currencyZeroPad": 45666767.6777, "currencySymbol": 45666767.6777,  "currencyComma": 45666767.6777, "currencyInteger": 45666767.6777, "currencyAllOptions": 45666767.6777 },
  { "id": 8, "answer": null,   "currency": null,           "currencyZeroPad": null,          "currencySymbol": null,           "currencyComma": null,          "currencyInteger": null,          "currencyAllOptions": null },
  { "id": 9, "answer": true,   "currency": 1234567,        "currencyZeroPad": 1234567,       "currencySymbol": 1234567,        "currencyComma": 1234567,       "currencyInteger": 1234567,       "currencyAllOptions": 1234567 },
  { "id": 10, "answer": false,  "currency": 8775456.21,     "currencyZeroPad": 8775456.21,    "currencySymbol": 8775456.21,     "currencyComma": 8775456.21,    "currencyInteger": 8775456.21,    "currencyAllOptions": 8775456.21 },
  { "id": 11, "answer": null,   "currency": 45666767.6777,  "currencyZeroPad": 45666767.6777, "currencySymbol": 45666767.6777,  "currencyComma": 45666767.6777, "currencyInteger": 45666767.6777, "currencyAllOptions": 45666767.6777 },
  { "id": 12, "answer": null,   "currency": null,           "currencyZeroPad": null,          "currencySymbol": null,           "currencyComma": null,          "currencyInteger": null,          "currencyAllOptions": null },
];

export const mockApiConfigList = [
    { method: 'post', url: URL_DATATABLE_LIST_GET, response: { data: RESOPNSE_DATATABLE_LIST_GET }, status: 200 },
    //{ method: 'post', url: URL_DATATABLE_LIST_GET, response: { message: "error business logic" }, status: 422 }
  ];