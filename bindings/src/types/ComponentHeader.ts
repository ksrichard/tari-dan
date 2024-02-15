// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { ComponentAccessRules } from "./ComponentAccessRules";
import type { ComponentBody } from "./ComponentBody";
import type { OwnerRule } from "./OwnerRule";

export interface ComponentHeader {
  template_address: Uint8Array;
  module_name: string;
  owner_key: string;
  owner_rule: OwnerRule;
  access_rules: ComponentAccessRules;
  body: ComponentBody;
}
