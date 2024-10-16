import type { Amount } from "../Amount";
import type { ComponentAddressOrName } from "./ComponentAddressOrName";
import type { ConfidentialTransferInputSelection } from "../ConfidentialTransferInputSelection";
import type { ResourceAddress } from "../ResourceAddress";
export interface ConfidentialTransferRequest {
    account: ComponentAddressOrName | null;
    amount: Amount;
    input_selection: ConfidentialTransferInputSelection;
    resource_address: ResourceAddress;
    destination_public_key: string;
    max_fee: Amount | null;
    output_to_revealed: boolean;
    proof_from_badge_resource: string | null;
    dry_run: boolean;
}
