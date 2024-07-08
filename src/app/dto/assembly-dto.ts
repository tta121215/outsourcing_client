export class AssemblyDto {
  constructor(
    public id: number,
    public assemblyPoint: string,
    public lat: number,
    public long: number,
    public ipAddress: number,
    public deviceType: string,
    public status: string
  ) {}
}
