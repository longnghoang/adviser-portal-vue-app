<script setup lang="ts">
import {
  Sparkles,
  Paintbrush,
  CheckCircle2,
  Layers,
  Check,
  Zap,
  ShieldCheck,
  ExternalLink,
  Route,
} from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

const techStacks = [
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    icon: Paintbrush,
    description: 'Utility-first CSS framework configured with design tokens and PostCSS.',
    badge: 'v3.4',
    url: 'https://tailwindcss.com',
  },
  {
    name: 'shadcn-vue',
    category: 'UI Components',
    icon: Layers,
    description: 'Accessible, customizable component architecture built with Radix Vue.',
    badge: 'v1.9',
    url: 'https://shadcn-vue.com',
  },
  {
    name: 'Vue Router',
    category: 'Routing',
    icon: Route,
    description: 'Official routing library for Vue 3 providing seamless SPA navigation.',
    badge: 'v4.6',
    url: 'https://router.vuejs.org',
  },
  {
    name: 'Prettier',
    category: 'Code Formatter',
    icon: Sparkles,
    description: 'Opinionated code formatter with Tailwind CSS class sorting plugin.',
    badge: 'v3.9',
    url: 'https://prettier.io',
  },
  {
    name: 'ESLint',
    category: 'Linter',
    icon: ShieldCheck,
    description: 'Modern Flat Config for Vue 3 SFCs and TypeScript with Prettier compatibility.',
    badge: 'v9.20',
    url: 'https://eslint.org',
  },
  {
    name: 'Lucide Icons',
    category: 'Iconography',
    icon: Zap,
    description: 'Crisp, flexible icon library seamlessly integrated for Vue 3 components.',
    badge: 'v1.0',
    url: 'https://lucide.dev/guide/vue/',
  },
];
</script>

<template>
  <div class="container mx-auto max-w-6xl px-4 py-8 sm:px-6">
    <!-- Hero Banner -->
    <section class="mb-10 text-center sm:text-left">
      <div
        class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
      >
        <CheckCircle2 class="h-3.5 w-3.5" />
        <span>All tech stacks installed and configured</span>
      </div>
      <h2 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
        Modern Vue 3 Development Stack
      </h2>
      <p class="mt-2 max-w-2xl text-muted-foreground">
        This project is ready with Tailwind CSS, shadcn-vue component system, Vue Router, ESLint
        flat config, Prettier formatting, and Lucide icons.
      </p>
    </section>

    <!-- Tech Stack Cards -->
    <section class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card
        v-for="tech in techStacks"
        :key="tech.name"
        class="flex flex-col justify-between transition-all hover:shadow-md"
      >
        <CardHeader>
          <div class="flex items-center justify-between">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"
            >
              <component :is="tech.icon" class="h-5 w-5" />
            </div>
            <span
              class="rounded-md bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground"
            >
              {{ tech.badge }}
            </span>
          </div>
          <CardTitle class="mt-3 text-lg">{{ tech.name }}</CardTitle>
          <CardDescription>{{ tech.description }}</CardDescription>
        </CardHeader>

        <CardContent class="text-xs text-muted-foreground">
          <span class="inline-block font-medium text-foreground">Category:</span>
          {{ tech.category }}
        </CardContent>

        <CardFooter class="pt-0">
          <a
            :href="tech.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex w-full items-center justify-center gap-1.5 rounded-md border border-input bg-background py-2 text-xs font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <span>Documentation</span>
            <ExternalLink class="h-3 w-3" />
          </a>
        </CardFooter>
      </Card>

      <!-- Interactive Demo Card -->
      <Card
        class="flex flex-col justify-between border-primary/40 bg-gradient-to-br from-card to-primary/5 shadow-sm"
      >
        <CardHeader>
          <div
            class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground"
          >
            <Sparkles class="h-5 w-5" />
          </div>
          <CardTitle class="mt-3 text-lg">shadcn-vue Buttons</CardTitle>
          <CardDescription>Experience variants and sizes</CardDescription>
        </CardHeader>
        <CardContent class="flex flex-wrap gap-2">
          <Button variant="default" size="sm">Default</Button>
          <Button variant="secondary" size="sm">Secondary</Button>
          <Button variant="outline" size="sm">Outline</Button>
          <Button variant="destructive" size="sm">Destructive</Button>
          <Button variant="ghost" size="sm">Ghost</Button>
        </CardContent>
        <CardFooter class="text-xs text-muted-foreground">
          <div class="flex items-center gap-1">
            <Check class="h-3.5 w-3.5 text-emerald-500" />
            <span>All variants reactive & accessible</span>
          </div>
        </CardFooter>
      </Card>
    </section>
  </div>
</template>
