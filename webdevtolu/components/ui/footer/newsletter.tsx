import { FormEvent } from "react";
import Button from "../form/Button";

type Props = {};

const Newsletter = (props: Props) => {
  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`You've subscribed`);
  };
  return (
    <form onSubmit={handleSubscribe}>
      <div>
        <Button
          type="submit"
          title="Subscribe"
          style="flat"
          color="dark"
          size="base"
        />
      </div>
    </form>
  );
};

export default Newsletter;
