"use client";
import { IEvent } from "@/lib/database/models/event.model";
import React from "react";
import Link from "next/link";
import Checkout from "./Checkout";
import { useSession } from "next-auth/react";

const CheckoutButon = ({ event }: { event: IEvent }) => {
  const { data: session } = useSession();
  const userId = "6644ba3155363a19efb437b3";
  const hasEventFinished = new Date(event.endDateTime) < new Date();
  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-3 text-rose-600">
          Sory, tickets are no longer available
        </p>
      ) : (
        <>
          {!session ? (
            <>
              <Link
                className="border px-3 bg-black text-white  py-2 rounded-full"
                href="/sign-in"
              >
                Get Tickets
              </Link>{" "}
            </>
          ) : (
            <></>
          )}

          <Checkout event={event} userId={userId} />
        </>
      )}
    </div>
  );
};

export default CheckoutButon;
