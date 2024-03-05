import { TypedSupabaseClient } from '@/utils/types'
import { RulesTableTypes } from '@/types/collection'

export function getUserRules(client: TypedSupabaseClient) {
  return client
    .from('rules')
    .select()
    .order('last_date_modified', { ascending: false })
    .returns<RulesTableTypes[]>()
}