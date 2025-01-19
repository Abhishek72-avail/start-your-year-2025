# start-your-year-2025

#how to stepup our deno in GitHUb codeSpace

- Creating A GitHub Account
- Creating A New Repository
- Next, click the "New repository" button
- Click "Codespaces" then click "Create codespace on main
- t should take you to a cloud environment using VSCode Web as the interface.
  Deno is not installed there by default so let's do that.

# Installing Deno

- To install Deno, head to their website https://deno.com and scroll down a bit.
- window : curl -fsSL https://deno.land/install.sh | sh
- MacOS/Linux : irm https://deno.land/install.ps1 | iex
- Once you run the command, you will be prompted with "Edit shell configs to add
  deno to the PATH?". Type "Y" and press Enter.
- You may also want to install shell completions. Press the space bar to select
  or deselect. Press Enter.
- Be sure to close your current terminal and open a new terminal so the updated
  environmental variables get loaded.
- You can check that Deno is properly installed by running the following
  command.
- {deno upgrade} Deno's version is 2.1.4.
- At the root directory of your project, run the following commands.

touch deno.json deno add 'jsr:@std/assert'

- installation is done

# Variables in Javascript

- A comment in Javascript starts with //.
- Javascript variables can be declared with both var, let and const keywords.
