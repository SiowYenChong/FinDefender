import { useState } from "react"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ReportFormProps {
  onClose: () => void
}

export default function ReportForm({ onClose }: ReportFormProps) {
  const [files, setFiles] = useState<File[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted")
    onClose()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-background rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Report Account</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Recipient Email</Label>
            <Input id="email" type="email" placeholder="Enter recipient email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Recipient Phone Number</Label>
            <Input id="phone" type="tel" placeholder="Enter recipient phone number" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-mode">Mode of Contact</Label>
            <Select required>
              <SelectTrigger id="contact-mode">
                <SelectValue placeholder="Select mode of contact" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                <SelectItem value="telegram">Telegram</SelectItem>
                <SelectItem value="email">Email</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description of Incident</Label>
            <Textarea id="description" placeholder="Describe the incident" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="file-upload">Upload Images</Label>
            <Input id="file-upload" type="file" multiple accept="image/*" onChange={handleFileChange} />
            {files.length > 0 && (
              <p className="text-sm text-muted-foreground">{files.length} file(s) selected</p>
            )}
          </div>
          <Button type="submit" className="w-full">Submit Report</Button>
        </form>
      </div>
    </div>
  )
}

