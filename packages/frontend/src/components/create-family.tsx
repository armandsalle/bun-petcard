import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { api } from "@/lib/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { type FamilySchema, familySchema } from "@server/routers/family-router"
import { Controller, useForm } from "react-hook-form"

export function CreateFamily() {
  const { handleSubmit, control } = useForm<FamilySchema>({
    resolver: zodResolver(familySchema),
    defaultValues: {
      bio: "",
      name: "",
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      await api.family.new.$post({
        json: data,
      })
    } catch (error) {
      console.error(error)
    }
  })

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>New family</CardTitle>
          <CardDescription>Let's create your first family!</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6" onSubmit={onSubmit}>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <div className="grid gap-2">
                  <Label htmlFor={field.name} className="ml-1.5">
                    {field.name}
                  </Label>
                  <div>
                    <Input
                      id="name"
                      type="text"
                      className="w-full"
                      {...field}
                    />
                    <span className="text-muted-foreground ml-1.5 mt-1.5 block text-xs">
                      The {field.value} family
                    </span>
                  </div>
                </div>
              )}
            />

            <Controller
              name="bio"
              control={control}
              render={({ field }) => (
                <div className="grid gap-2">
                  <Label htmlFor={field.name} className="ml-1.5">
                    {field.name}
                  </Label>
                  <Textarea
                    id={field.name}
                    maxLength={255}
                    className="min-h-32"
                    {...field}
                  />
                </div>
              )}
            />

            <Button>Create my family</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
