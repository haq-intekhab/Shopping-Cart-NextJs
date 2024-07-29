"use client";

import { loginAction } from "@/actions";

const { Button } = require("../ui/button");

function LoginBtn() {

    async function handleSignIn(){
        await loginAction();
    }

    
  return (
    <div className="w-full h-full flex justify-center items-center mt-8">
      <Button type="submit" onClick={handleSignIn} className="w-[30%] text-xl">
        Login
      </Button>
    </div>
  );
}

export default LoginBtn;
