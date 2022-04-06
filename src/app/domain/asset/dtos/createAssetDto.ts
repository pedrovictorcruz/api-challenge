export interface CreateAssetDTO {
  id?: string
  name: string
  image: string
  description: string
  model: string
  status: "Running" | "Alerting" | "Stopped"
  health: number
  owner: string
  unitId: string
}
