import { Session } from "next-auth";

export type memberType = {
    id: number;
    attributes: {
      username: string;
      email: string;
      password: string;
      id: number;
    };
  };
  export type AppContextType ={
    
    toggle: () => void;
    mode: string;
    setAuthenticated: (authenticated: Session | null) => void;
    authenticated: Session | null;
    apiUrl: string;
    postUrl: string;
  
  }

  export type User={
    jwt:string,
    user:{
      id:number,
      username:string,
      email:string,
      password:string
    }

  }
  