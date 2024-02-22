export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      case_notes: {
        Row: {
          case_note_id: number | null
          case_number: number | null
          client_code: number | null
          content: string | null
          created_at: string
          created_by: string | null
          id: number
        }
        Insert: {
          case_note_id?: number | null
          case_number?: number | null
          client_code?: number | null
          content?: string | null
          created_at?: string
          created_by?: string | null
          id?: number
        }
        Update: {
          case_note_id?: number | null
          case_number?: number | null
          client_code?: number | null
          content?: string | null
          created_at?: string
          created_by?: string | null
          id?: number
        }
        Relationships: []
      }
      cases: {
        Row: {
          assignee: string | null
          case_id: string | null
          case_number: string | null
          case_status: string | null
          client_code: number | null
          created_at: string
          id: number
          last_date_modified: string | null
          last_modified_by: string | null
          notification: boolean | null
          opt_out_victim_ids: string | null
          opt_out_victim_names: string | null
          police_dpt: string | null
          victim_emails: string | null
          victim_ids: string | null
          victim_names: string | null
          victim_phone_numbers: string | null
        }
        Insert: {
          assignee?: string | null
          case_id?: string | null
          case_number?: string | null
          case_status?: string | null
          client_code?: number | null
          created_at?: string
          id?: number
          last_date_modified?: string | null
          last_modified_by?: string | null
          notification?: boolean | null
          opt_out_victim_ids?: string | null
          opt_out_victim_names?: string | null
          police_dpt?: string | null
          victim_emails?: string | null
          victim_ids?: string | null
          victim_names?: string | null
          victim_phone_numbers?: string | null
        }
        Update: {
          assignee?: string | null
          case_id?: string | null
          case_number?: string | null
          case_status?: string | null
          client_code?: number | null
          created_at?: string
          id?: number
          last_date_modified?: string | null
          last_modified_by?: string | null
          notification?: boolean | null
          opt_out_victim_ids?: string | null
          opt_out_victim_names?: string | null
          police_dpt?: string | null
          victim_emails?: string | null
          victim_ids?: string | null
          victim_names?: string | null
          victim_phone_numbers?: string | null
        }
        Relationships: []
      }
      cases_test_upload: {
        Row: {
          assignee: string | null
          case_id: string | null
          case_number: string | null
          case_status: string | null
          client_code: number | null
          created_at: string
          id: number
          last_date_modified: string | null
          last_modified_by: string | null
          notification: boolean | null
          opt_out_victim_ids: string | null
          opt_out_victim_names: string | null
          police_dpt: string | null
          victim_emails: string | null
          victim_ids: string | null
          victim_names: string | null
          victim_phone_numbers: string | null
        }
        Insert: {
          assignee?: string | null
          case_id?: string | null
          case_number?: string | null
          case_status?: string | null
          client_code?: number | null
          created_at?: string
          id?: number
          last_date_modified?: string | null
          last_modified_by?: string | null
          notification?: boolean | null
          opt_out_victim_ids?: string | null
          opt_out_victim_names?: string | null
          police_dpt?: string | null
          victim_emails?: string | null
          victim_ids?: string | null
          victim_names?: string | null
          victim_phone_numbers?: string | null
        }
        Update: {
          assignee?: string | null
          case_id?: string | null
          case_number?: string | null
          case_status?: string | null
          client_code?: number | null
          created_at?: string
          id?: number
          last_date_modified?: string | null
          last_modified_by?: string | null
          notification?: boolean | null
          opt_out_victim_ids?: string | null
          opt_out_victim_names?: string | null
          police_dpt?: string | null
          victim_emails?: string | null
          victim_ids?: string | null
          victim_names?: string | null
          victim_phone_numbers?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string | null
          created_at: string
          created_by: string | null
          id: number
          message_id: number | null
          message_recipient_email: string | null
          message_recipient_sms: string | null
          status: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          created_by?: string | null
          id?: number
          message_id?: number | null
          message_recipient_email?: string | null
          message_recipient_sms?: string | null
          status?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          created_by?: string | null
          id?: number
          message_id?: number | null
          message_recipient_email?: string | null
          message_recipient_sms?: string | null
          status?: string | null
        }
        Relationships: []
      }
      rules: {
        Row: {
          created_at: string
          created_by: string | null
          delay: string | null
          id: number
          if_logic_action: string | null
          if_logic_status: string | null
          if_logic_values: string | null
          last_modified_by: string | null
          last_modified_time: string | null
          rule_id: number | null
          subject: string | null
          template_id: number | null
          then_logic_action: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          delay?: string | null
          id?: number
          if_logic_action?: string | null
          if_logic_status?: string | null
          if_logic_values?: string | null
          last_modified_by?: string | null
          last_modified_time?: string | null
          rule_id?: number | null
          subject?: string | null
          template_id?: number | null
          then_logic_action?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          delay?: string | null
          id?: number
          if_logic_action?: string | null
          if_logic_status?: string | null
          if_logic_values?: string | null
          last_modified_by?: string | null
          last_modified_time?: string | null
          rule_id?: number | null
          subject?: string | null
          template_id?: number | null
          then_logic_action?: string | null
        }
        Relationships: []
      }
      templates: {
        Row: {
          content: string | null
          created_at: string
          created_by: string | null
          id: number
          last_modified_by: string | null
          last_modified_date: string | null
          template_active: string | null
          template_id: number | null
          template_name: string | null
          template_type: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          created_by?: string | null
          id?: number
          last_modified_by?: string | null
          last_modified_date?: string | null
          template_active?: string | null
          template_id?: number | null
          template_name?: string | null
          template_type?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          created_by?: string | null
          id?: number
          last_modified_by?: string | null
          last_modified_date?: string | null
          template_active?: string | null
          template_id?: number | null
          template_name?: string | null
          template_type?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          client_code: number | null
          created_at: string
          id: number
          last_login: string | null
          role: string | null
          user_email: string | null
          user_firstname: string | null
          user_id: number | null
          user_lastname: string | null
        }
        Insert: {
          client_code?: number | null
          created_at?: string
          id?: number
          last_login?: string | null
          role?: string | null
          user_email?: string | null
          user_firstname?: string | null
          user_id?: number | null
          user_lastname?: string | null
        }
        Update: {
          client_code?: number | null
          created_at?: string
          id?: number
          last_login?: string | null
          role?: string | null
          user_email?: string | null
          user_firstname?: string | null
          user_id?: number | null
          user_lastname?: string | null
        }
        Relationships: []
      }
      views: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          owner_id: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          owner_id?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          owner_id: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          owner_id?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            isOneToOne: false
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
