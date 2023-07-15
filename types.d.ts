type SessionProps={
    children: React.ReactNode;
  };

  type WagmiProviderType = {
    children: React.ReactNode;
  };
  type ProviderType = {
    children: React.ReactNode;
  };

  type signInProps={
    hasSigned:boolean,
    setHasSigned:(name: boolean) => void;
  }

  type userdetail={
    email:FormDataEntryValue | null,
    address:FormDataEntryValue  | null,
    first_name:FormDataEntryValue | null,
    last_name:FormDataEntryValue | null,
    phone:FormDataEntryValue | null,
    team:FormDataEntryValue | null


  }
  type team={
    name:FormDataEntryValue | null,
    leader:string | null,
    description:FormDataEntryValue | null
    name2:FormDataEntryValue | null
}

type teamProp={
  name:string | null,
  leader:string | null,
  description:string | null
  key:string
  name2:string | null
  teamId:string|null
}



type teamApi= {
  _id: string,
  name: string,
  description:string,
  name2: string,
  leader: string,
  players: [
    string
  ],
  req: [ string ],
  __v: number
}