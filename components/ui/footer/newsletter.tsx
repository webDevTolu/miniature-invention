import {  FormEvent, useState } from "react";
import { Button } from "../form/Button";
import { Input } from "../form/Input";

const Newsletter = () => {
  const [enteredEmail, setEnteredEmail] = useState<string>('')

  const handleEmailChange = (email: string) => {
    setEnteredEmail(email)
  }

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`You've subscribed to our newsletter with this email: ${enteredEmail}`);
  };

  return (
    <form onSubmit={handleSubscribe} className="flex gap-2 itens-start h-full">
      <Input type="email" required name="subscribeEmail" placeholder="Enter your email" style="round" onChange={handleEmailChange} />
        <Button
          type="submit"
          title="Subscribe"
          style="round"
          color="dark"
          size="base"
        />
    </form>
  );
};

export default Newsletter;
