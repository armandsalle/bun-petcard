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
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/_family/family")({
  component: () => (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>New family</CardTitle>
          <CardDescription>Let's create your first family!</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name" className="ml-1.5">
                Name
              </Label>
              <div>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  defaultValue="Bibou"
                />
                <span className="text-muted-foreground ml-1.5 mt-1.5 block text-xs">
                  The Bibou family
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bio" className="ml-1.5">
                Bio
              </Label>
              <Textarea
                id="bio"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                className="min-h-32"
              />
            </div>
            <Button>Create my family</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  ),
})
