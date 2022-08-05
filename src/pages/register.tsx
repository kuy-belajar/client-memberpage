/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useState } from "react";
import { NextSeo } from "next-seo";
import Link from "next/link";
import LayoutWrapper from "@/components/layouts/LayoutWrapper";

import InputForm from "@/components/form/input";
import SelectForm from "@/components/form/select";

const Register: NextPage = () => {
  const [name, setName] = useState(() => "");
  const [email, setEmail] = useState(() => "");
  const [password, setPassword] = useState(() => "");
  const [profession, setProfession] = useState(() => "");

  console.log({
    name,
    email,
    password,
    profession,
  });
  return (
    <>
      <NextSeo title="Create an account" />
      <LayoutWrapper custom>
        <section className="flex flex-1 bg-gray-50 items-center justify-center dark:bg-gray-900 px-6 py-8 mx-auto md:min-h-full w-full">
          <div className="w-full bg-white rounded shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-3 md:space-y-4" action="#">
                <InputForm
                  name={name}
                  type="text"
                  placeholder="Your name"
                  onChange={(event) => setName(event.target.value)}
                  labelName="Full Name"
                />
                <InputForm
                  name={email}
                  type="email"
                  placeholder="name@company.com"
                  onChange={(event) => setEmail(event.target.value)}
                  labelName="Email"
                />
                <InputForm
                  name={password}
                  type="email"
                  placeholder="••••••••••"
                  onChange={(event) => setPassword(event.target.value)}
                  labelName="Password"
                />
                <SelectForm
                  name="profession"
                  labelName="Role"
                  placeholder="Select occupation"
                  value={profession}
                  onClick={setProfession}
                >
                  <option value="">Select role</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Fullstack Developer">
                    Fullstack Developer
                  </option>
                  <option value="Fullstack Engineer">Fullstack Engineer</option>
                </SelectForm>
                {/* <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div> */}
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link href="/login">
                    <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Login here
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

export default Register;
