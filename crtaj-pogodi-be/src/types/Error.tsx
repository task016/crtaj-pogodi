interface Error {
  message: string;
  status?: number;
  stack?: string;
}

export default Error;
