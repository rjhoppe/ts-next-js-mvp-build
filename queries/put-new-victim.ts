import { TypedSupabaseClient } from '@/utils/types'
import { InsertVictimTypes } from '@/types/collection'

export function putNewVictim(client: TypedSupabaseClient, param: string) {
  return client
    .from('cases_test_upload')
    .update({ param })
    .eq('case_id', `${caseId}`)
    .select()
}
