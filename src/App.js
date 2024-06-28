import React, { useState, useEffect, useCallback } from "react";
import { Label } from "./@/components/ui/label";
import { Input } from "./@/components/ui/input";
import {
  CommandList,
  CommandItem,
  CommandGroup,
  Command,
} from "./@/components/ui/command";
import { debounce } from "lodash";

export default function App() {
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState("");

  const fetchSuggestions = useCallback(
    debounce(async (value) => {
      setSuggestions([]);
      let canCreate = "no";
      if (window?.ai?.canCreateTextSession !== undefined) {
        canCreate = await window.ai.canCreateTextSession(); // "readily", "no", or "after-download"
      }
      if (canCreate !== "no") {
        const session = await window.ai.createTextSession();
        const response = await session.prompt(
          `Provide 5 autocomplete suggestions for the following input in English, formatted as a JSON array. \nExample, input="Pets", the output should be \`\`\`json["Cats", "Dogs", "Mice"]\`\`\`<ctrl23>\n. Input="${value}"".`
        );
        console.log("response", response);

        const suggestions = JSON.parse(
          response
            .toLowerCase()
            .replace(/```json|```/gi, "")
            .trim()
        );
        console.log(response);
        setSuggestions(suggestions);
      }
    }, 300),
    []
  );

  useEffect(() => {
    if (query.length > 0) {
      fetchSuggestions(query);
    }
  }, [query, fetchSuggestions]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="grid w-full max-w-md items-center gap-2 antialiased p-8">
      <Label htmlFor="search">Search</Label>
      <div className="relative">
        <Input
          type="text"
          id="search"
          placeholder="Search for something..."
          className="pr-12"
          onChange={handleChange}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <SearchIcon className="h-5 w-5" />
        </div>
        {suggestions?.length > 0 && (
          <div className="absolute z-10 w-full mt-1 overflow-auto bg-background border border-input rounded-md shadow-lg max-h-60">
            <div className="py-1">
              <Command>
                <CommandList>
                  <CommandGroup>
                    {suggestions.map((item, index) => (
                      <CommandItem key={index}>
                        <div className="flex items-center justify-between capitalize">
                          <span>{item}</span>
                        </div>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
