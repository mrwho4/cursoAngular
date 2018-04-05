export class Sucursal {

  public _id: string;
  public latitud: number;
  public longitud: number;

  constructor(public numero: string,
    public direccion: string,
    public telefono: string) {

  }
}
