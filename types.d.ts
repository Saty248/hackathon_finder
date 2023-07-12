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