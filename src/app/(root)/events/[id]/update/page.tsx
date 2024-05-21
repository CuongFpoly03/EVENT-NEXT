import FormEvent from "@/components/events/FormEvent";
import { getEventById } from "@/lib/actions/event.action";
import { useSession } from "next-auth/react";
import React from "react";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

const Update = async ({ params: { id } }: UpdateEventProps) => {
  // const {data: session} = useSession();
  // console.log(session);
  const userId = "6644ba3155363a19efb437b3"// Lấy userId của người dùng hiện tại
  const event = await getEventById(id);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <FormEvent
          type="Update"
          event={event}
          eventId={event._id}
          userId={userId}
        />
      </div>
    </>
  );
};

export default Update;
