export interface FilterItem {
  field: string;
  label: string;
  type: number;
  isOT?: boolean;
  operator?: string;
  otDatatype?: number;
  defaultValue: any;
  searchable: boolean;
  clearable: boolean;
  isUsed: boolean;
  keyField?: string;
  valueField?: string;
  options?: any[];
}
