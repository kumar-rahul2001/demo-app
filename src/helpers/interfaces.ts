export interface ClientData {
  name: string;
  phone: string;
  pinCode: string;
  gstNumber: string;
  panNumber: string;
  state: string;
  city: string;
  address: string;
  status: string;
}

export interface State {
  id: number;
  name: string;
  state_code: string;
}

export interface City {
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  _id: string;
}
export interface ClientsFormDialogProps {
  open: boolean;
  onClose: () => void;
  onClientAdded: () => void;
  clientToEdit: ClientData | null;
}
