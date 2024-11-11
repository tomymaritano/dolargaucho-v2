declare module 'hooks/useFetchDolar' {
    export type DolarData = {
      compra: number;
      venta: number;
      casa: string;
      nombre: string;
      moneda: string;
      fechaActualizacion: string;
    };
  
    export type UseFetchDolarReturn = {
      data: DolarData[];
      loading: boolean;
      error: string | null;
    };
  }