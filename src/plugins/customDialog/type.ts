import type { Component } from 'vue'

type DialogPlugin = {
  component: Component
  title: string
  width: string
  onSubmit: (data: any) => void
  onCancel: () => void
}

export type { DialogPlugin }
