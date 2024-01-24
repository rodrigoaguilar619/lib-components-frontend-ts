import { URL_DATATABLE_LIST_GET } from "../../../catalogs/uriCatalog";

const RESOPNSE_DATATABLE_LIST_GET: any[] = [
  { "initials": "iniciales", "description": "descripcion", "typeStockDescription": "stock" },
  { "initials": "iniciales 2", "description": "descripcion", "typeStockDescription": "stock" },
  { "initials": "iniciales 3", "description": "descripcion", "typeStockDescription": "stock" },
  { "initials": "iniciales", "description": "descripcion", "typeStockDescription": "stock" },
  { "initials": "iniciales 2", "description": "descripcion", "typeStockDescription": "stock" },
  { "initials": "iniciales 3", "description": "descripcion", "typeStockDescription": "stock" },
  { "initials": "iniciales", "description": "descripcion", "typeStockDescription": "stock" },
  { "initials": "iniciales 2", "description": "descripcion", "typeStockDescription": "stock" },
  { "initials": "iniciales 3", "description": "descripcion", "typeStockDescription": "stock" },
  { "initials": "iniciales", "description": "descripcion", "typeStockDescription": "stock" },
  { "initials": "iniciales 2", "description": "descripcion", "typeStockDescription": "stock" },
  { "initials": "iniciales 3", "description": "descripcion", "typeStockDescription": "stock" },
  { "initials": "iniciales", "description": "descripcion", "typeStockDescription": "stock" },
  { "initials": "iniciales 2", "description": "descripcion", "typeStockDescription": "stock" },
  { "initials": "iniciales 3", "description": "descripcion", "typeStockDescription": "stock" },
];

export const mockApiConfigList = [
    { method: 'post', url: URL_DATATABLE_LIST_GET, response: { data: RESOPNSE_DATATABLE_LIST_GET }, status: 200 },
    //{ method: 'post', url: URL_DATATABLE_LIST_GET, response: { message: "error business logic" }, status: 422 }
  ];