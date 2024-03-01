import { TypedSupabaseClient } from '@/utils/types'
import { DataTableTypes } from '@/types/collection'

export function getUserCases(client: TypedSupabaseClient) {
  return client
    .from('cases_test_upload')
    .select()
    .order('last_date_modified', { ascending: false })
    .returns<DataTableTypes[]>()
}
