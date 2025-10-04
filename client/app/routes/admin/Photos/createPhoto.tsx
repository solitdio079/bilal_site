import { useEffect, useRef, useState } from "react";
import { Link, redirect, useFetcher, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { serverUrl } from "~/utils/serverUrl";
import type { Route } from "./+types/createPhoto";

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();
  const token = localStorage.getItem("token");
  if (!token) return redirect("/login");
  try {
    const req = await fetch(serverUrl + "/photos/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const response = await req.json();
    return response;
  } catch (error) {
    return { error };
  }
}


export default function createPhoto() {
  const fetcher = useFetcher();

  useEffect(() => {
    const toastOptions = { duration: 5000 };

    if (fetcher.data && fetcher.data.msg) {
      toast.success(fetcher.data.msg, toastOptions);
      //posthog.capture("post created")
    } else if (fetcher.data && fetcher.data.error) {
      toast.error(fetcher.data.error, toastOptions);
    }
    // Optional cleanup
  });
  return (
    <fetcher.Form
      method="post"
      encType="multipart/form-data"
      className="flex flex-col shadow-sm py-5 px-10 w-full"
    >
         <Toaster />
         <div>
         <h3 className="font-bold mb-5">Create a photo</h3>
         <div className="max-w-sm">
              <label className="label-text" htmlFor="fileInputLabel">
                {" "}
                Pick a file{" "}
              </label>
              <input
                type="file"
                className="input"
                name="images"
                multiple
                required
                id="fileInputLabel"
              />
            </div>
         </div>
         <div className="flex justify-between">
          <button className="btn btn-primary">
            {" "}
            {fetcher.state === "idle" ? (
              "Creer"
            ) : (
              <span className="loading loading-ball"></span>
            )}{" "}
          </button>
        </div>
    </fetcher.Form>
  );
}
