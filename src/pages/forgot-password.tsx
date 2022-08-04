/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import LayoutWrapper from "@/components/layouts/LayoutWrapper";
import Link from "next/link";

const ForgotPassword: NextPage = () => {
  return (
    <>
      <NextSeo title="Reset your password" />
      <LayoutWrapper custom>
        <section className="flex flex-1 bg-gray-50 items-center justify-center dark:bg-gray-900 px-6 py-8 mx-auto md:min-h-full w-full">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Reset Password
            </h2>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Reset password
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Remember your password?{" "}
                <Link href="/login">
                  <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Login here
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </section>
      </LayoutWrapper>
    </>
  );
};

export default ForgotPassword;
