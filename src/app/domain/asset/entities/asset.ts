export interface Asset {
  id?: string
  image: string
  name: string
  description: string
  model: string
  owner: string
  status: "Running" | "Alerting" | "Stopped"
  health: number
  unitId: string
}
