import type { Actions } from "@sveltejs/kit";

export const actions = {
  // delete: async (event) => {		
  //   const formData = await event.request.formData();
  //   console.log(`Deleting your user - ${formData.get("username")}`)
  // },
  create: async (event) => {		// TODO log the user in
    const formData = await event.request.formData();
    console.log(`Creating your user - ${formData.get("username")}`)
  },
} satisfies Actions;

