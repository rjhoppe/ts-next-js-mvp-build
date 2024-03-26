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
          assignee: string
          case_id: string
          case_number: string
          case_status: string
          case_status_id: string
          case_time: string
          case_type: string
          client_code: number
          created_at: string
          id: number
          last_date_modified: string
          last_modified_by: string
          notification: boolean
          opt_out_victim_ids: string
          opt_out_victim_names: string
          police_dpt: string
          victim_emails: string
          victim_ids: string
          victim_names: string
          victim_phone_numbers: string
        }
        Insert: {
          assignee?: string
          case_id: string
          case_number: string
          case_status?: string
          case_status_id: string
          case_time: string
          case_type: string
          client_code: number
          created_at?: string
          id?: number
          last_date_modified?: string
          last_modified_by?: string
          notification?: boolean
          opt_out_victim_ids?: string
          opt_out_victim_names?: string
          police_dpt: string
          victim_emails: string
          victim_ids: string
          victim_names: string
          victim_phone_numbers: string
        }
        Update: {
          assignee?: string
          case_id?: string
          case_number?: string
          case_status?: string
          case_status_id?: string
          case_time?: string
          case_type?: string
          client_code?: number
          created_at?: string
          id?: number
          last_date_modified?: string
          last_modified_by?: string
          notification?: boolean
          opt_out_victim_ids?: string
          opt_out_victim_names?: string
          police_dpt?: string
          victim_emails?: string
          victim_ids?: string
          victim_names?: string
          victim_phone_numbers?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          client_code: number | null
          content: string | null
          created_at: string
          created_by: string | null
          creator_id: number | null
          id: number
          message_id: number | null
          message_recipient_email: string | null
          message_recipient_sms: string | null
          status: string | null
        }
        Insert: {
          client_code?: number | null
          content?: string | null
          created_at?: string
          created_by?: string | null
          creator_id?: number | null
          id?: number
          message_id?: number | null
          message_recipient_email?: string | null
          message_recipient_sms?: string | null
          status?: string | null
        }
        Update: {
          client_code?: number | null
          content?: string | null
          created_at?: string
          created_by?: string | null
          creator_id?: number | null
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
          client_code: number
          created_at: string
          created_by: string
          delay: string
          id: number
          if_logic: string
          last_date_modified: string
          last_modified_by: string
          police_dpt: string
          rule_id: string
          status: string
          then_logic: string
        }
        Insert: {
          client_code: number
          created_at?: string
          created_by: string
          delay: string
          id?: number
          if_logic: string
          last_date_modified?: string
          last_modified_by: string
          police_dpt: string
          rule_id: string
          status: string
          then_logic: string
        }
        Update: {
          client_code?: number
          created_at?: string
          created_by?: string
          delay?: string
          id?: number
          if_logic?: string
          last_date_modified?: string
          last_modified_by?: string
          police_dpt?: string
          rule_id?: string
          status?: string
          then_logic?: string
        }
        Relationships: []
      }
      templates: {
        Row: {
          active: string
          cc_recipients: string
          client_code: number
          created_at: string
          created_by: string
          id: number
          last_date_modified: string
          last_modified_by: string
          message: string
          police_dpt: string
          subject: string
          template_id: string
          template_name: string
          type: string
        }
        Insert: {
          active: string
          cc_recipients: string
          client_code: number
          created_at?: string
          created_by: string
          id?: number
          last_date_modified?: string
          last_modified_by: string
          message: string
          police_dpt: string
          subject: string
          template_id: string
          template_name: string
          type: string
        }
        Update: {
          active?: string
          cc_recipients?: string
          client_code?: number
          created_at?: string
          created_by?: string
          id?: number
          last_date_modified?: string
          last_modified_by?: string
          message?: string
          police_dpt?: string
          subject?: string
          template_id?: string
          template_name?: string
          type?: string
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
          },
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
        Returns: string[]
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

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
