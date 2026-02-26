import type { ServerFunctionClient } from 'payload'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import { importMap } from './importMap'
import configPromise from '@payload-config'
import React from 'react'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const serverFunction: ServerFunctionClient = async function (args) {
    'use server'
    return handleServerFunctions({ ...args, config: configPromise, importMap })
  }

  return (
    <RootLayout config={configPromise} importMap={importMap} serverFunction={serverFunction}>
      {children}
    </RootLayout>
  )
}
