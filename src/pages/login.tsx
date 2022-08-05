/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useState, FormEvent } from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import LayoutWrapper from "@/components/layouts/LayoutWrapper";

import users from "@/constants/api/users";
import { setAuthHeader } from "@/configs/axios";

import InputForm from "@/components/form/input";

const Login: NextPage = () => {
  const [email, setEmail] = useState(() => "");
  const [password, setPassword] = useState(() => "");

  const submitClick = (event: FormEvent): void => {
    event.preventDefault();
    console.log({ email, password });
    users
      .login({ email, password })
      .then((res) => {
        setAuthHeader(res.data.token);
        users.details().then((detail) => {});
      })
      .catch((error) => {});
  };

  return (
    <>
      <NextSeo title="Login to your account" />
      <LayoutWrapper custom>
        <section className="flex flex-1 bg-gray-50 items-center justify-center dark:bg-gray-900 px-6 py-8 mx-auto md:min-h-full w-full">
          <div className="w-full bg-white rounded shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-3 md:space-y-4" onSubmit={submitClick}>
                <InputForm
                  name={email}
                  type="email"
                  placeholder="name@company.com"
                  onChange={(event) => setEmail(event.target.value)}
                  labelName="Email"
                />
                <InputForm
                  name={password}
                  type="password"
                  placeholder="••••••••••"
                  onChange={(event) => setPassword(event.target.value)}
                  labelName="Password"
                />
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link href="/forgot-password">
                    <a className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Forgot password?
                    </a>
                  </Link>
                </div> */}
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link href="/register">
                    <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Sign up
                    </a>
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </LayoutWrapper>
    </>
  );
};

export default Login;
