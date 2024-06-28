import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../@/components/ui/card"

export default function ErrorComponent() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Gemini Nano AI unavailable</CardTitle>
        <CardDescription>Step-by-step instructions to set up the Gemini Nano AI assistant in Chrome.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div>
            <h2 className="text-xl font-semibold">1. Install Chrome Canary</h2>
            <p className="text-muted-foreground">
              Gemini Nano requires Chrome Canary, the experimental version of Chrome. Download and install it from the{" "}
              <a href="https://google.com/chrome/canary" className="underline">
                official website
              </a>
              .
            </p>
          </div>
          <div>
            
            <h2 className="text-xl font-semibold">2. Enable Prompt API and Optimization Guide Flags</h2>
            <p className="text-muted-foreground">
              In Chrome Canary, navigate to <code className="rounded bg-muted px-2 py-1 font-mono">chrome://flags</code>
              and enable the following flags:
            </p>
            <ul className="list-disc space-y-2 pl-6 pt-4 text-muted-foreground">
              <li>
                Open <code className="rounded bg-muted px-2 py-1 font-mono">chrome://flags/#prompt-api-for-gemini-nano</code>, set it to "Enabled", and restart Chrome Canary.
              </li>
              <li>
                Open <code className="rounded bg-muted px-2 py-1 font-mono">chrome://flags/#optimization-guide-on-device-model</code>, set it to "Enabled BypassPerfRequirement". Restart the browser.
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">After enabling the flags, restart Chrome Canary.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">3. Download the Model</h2>
            <p className="text-muted-foreground">
              Download the Gemini Nano model. Go to <code className="rounded bg-muted px-2 py-1 font-mono">chrome://components/</code>, find "Optimization Guide On Device Model", ensure it’s fully downloaded. If the version is "0.0.0.0", click "Check for update".
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">4. Verify the Setup</h2>
            <p className="text-muted-foreground">
              Open a webpage, press F12, and check <code className="rounded bg-muted px-2 py-1 font-mono">window.ai</code> in the console.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-muted-foreground">
          Note: Gemini Nano is an experimental feature and may not be available in all regions.
        </div>
      </CardFooter>
    </Card>
  )
}
