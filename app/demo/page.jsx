"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
  export default function AccordionDemo() {

    function handleCancel() {
        console.log("Cancel")
    }
    function handleAction() {
        console.log("Action")
    }
    return (
        <AlertDialog>
        <AlertDialogTrigger className="p-1 px-3 bg-orange-500 rounded-md mx-5 mt-5 text-neutral-800">Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancel} className="bg-transparent">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleAction} className="bg-orange-600" >Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
    )
  }
  