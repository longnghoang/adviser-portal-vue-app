<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MaterialSymbol from '@/components/MaterialSymbol.vue';

const count = ref(0);
const isLiked = ref(false);
const iconVariant = ref<'outlined' | 'rounded' | 'sharp'>('outlined');
</script>

<template>
  <div class="space-y-6 my-8">
    <Card class="border shadow-sm">
      <CardHeader>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <MaterialSymbol name="verified" class="text-emerald-500" :size="28" fill />
            <CardTitle class="text-xl">Antigravity Tech Stack Setup</CardTitle>
          </div>
          <Badge
            variant="outline"
            class="gap-1 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
          >
            <MaterialSymbol name="check_circle" :size="16" />
            Ready
          </Badge>
        </div>
        <CardDescription>
          Tailwind CSS v4 + shadcn-vue + Google Material Symbols configured and working seamlessly.
        </CardDescription>
      </CardHeader>

      <CardContent class="space-y-6">
        <!-- 1. Tailwind CSS Demo -->
        <div>
          <h4
            class="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2"
          >
            <MaterialSymbol name="palette" :size="18" />
            1. Tailwind CSS
          </h4>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div
              class="p-3 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium text-sm flex items-center justify-center gap-1.5"
            >
              <MaterialSymbol name="format_paint" :size="18" />
              Blue Utility
            </div>
            <div
              class="p-3 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium text-sm flex items-center justify-center gap-1.5"
            >
              <MaterialSymbol name="eco" :size="18" />
              Emerald
            </div>
            <div
              class="p-3 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium text-sm flex items-center justify-center gap-1.5"
            >
              <MaterialSymbol name="auto_awesome" :size="18" />
              Purple Accent
            </div>
            <div
              class="p-3 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 font-medium text-sm flex items-center justify-center gap-1.5"
            >
              <MaterialSymbol name="bolt" :size="18" />
              Amber
            </div>
          </div>
        </div>

        <!-- 2. shadcn-vue Components Demo -->
        <div>
          <h4
            class="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2"
          >
            <MaterialSymbol name="widgets" :size="18" />
            2. shadcn-vue Components
          </h4>
          <div class="flex flex-wrap items-center gap-3">
            <Button @click="count++">
              <MaterialSymbol name="add" :size="18" />
              Count is: {{ count }}
            </Button>
            <Button variant="secondary" @click="count = 0">
              <MaterialSymbol name="restart_alt" :size="18" />
              Reset
            </Button>
            <Button variant="outline" @click="isLiked = !isLiked">
              <MaterialSymbol
                name="favorite"
                :size="18"
                :fill="isLiked"
                :class="isLiked ? 'text-red-500' : ''"
              />
              {{ isLiked ? 'Favorited' : 'Favorite' }}
            </Button>
            <Button variant="destructive">
              <MaterialSymbol name="delete" :size="18" />
              Destructive
            </Button>
          </div>
        </div>

        <!-- 3. Google Material Symbols Demo -->
        <div>
          <h4
            class="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2"
          >
            <MaterialSymbol name="diamond" :size="18" />
            3. Google Material Symbols
          </h4>
          <div class="flex flex-wrap gap-4 items-center">
            <!-- Icon variants switch -->
            <div class="flex items-center gap-1 bg-muted p-1 rounded-lg text-xs">
              <button
                type="button"
                :class="[
                  'px-2.5 py-1 rounded transition-colors',
                  iconVariant === 'outlined'
                    ? 'bg-background shadow-xs font-semibold'
                    : 'text-muted-foreground',
                ]"
                @click="iconVariant = 'outlined'"
              >
                Outlined
              </button>
              <button
                type="button"
                :class="[
                  'px-2.5 py-1 rounded transition-colors',
                  iconVariant === 'rounded'
                    ? 'bg-background shadow-xs font-semibold'
                    : 'text-muted-foreground',
                ]"
                @click="iconVariant = 'rounded'"
              >
                Rounded
              </button>
              <button
                type="button"
                :class="[
                  'px-2.5 py-1 rounded transition-colors',
                  iconVariant === 'sharp'
                    ? 'bg-background shadow-xs font-semibold'
                    : 'text-muted-foreground',
                ]"
                @click="iconVariant = 'sharp'"
              >
                Sharp
              </button>
            </div>

            <!-- Icon gallery -->
            <div class="flex items-center gap-4 text-muted-foreground">
              <span class="inline-flex items-center gap-1" title="Home">
                <MaterialSymbol name="home" :variant="iconVariant" :size="48" />
              </span>
              <span class="inline-flex items-center gap-1" title="Search">
                <MaterialSymbol name="search" :variant="iconVariant" :size="24" />
              </span>
              <span class="inline-flex items-center gap-1" title="Settings">
                <MaterialSymbol name="settings" :variant="iconVariant" :size="24" />
              </span>
              <span class="inline-flex items-center gap-1" title="Notifications">
                <MaterialSymbol name="notifications" :variant="iconVariant" :size="24" />
              </span>
              <span class="inline-flex items-center gap-1" title="Shopping Cart">
                <MaterialSymbol name="shopping_cart" :variant="iconVariant" :size="24" />
              </span>
              <span class="inline-flex items-center gap-1" title="Download">
                <MaterialSymbol name="download" :variant="iconVariant" :size="24" />
              </span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter class="border-t pt-4 text-xs text-muted-foreground flex justify-between">
        <span>Ready for production development</span>
        <span class="flex items-center gap-1">
          <MaterialSymbol name="code" :size="16" />
          Clean Architecture
        </span>
      </CardFooter>
    </Card>
  </div>
</template>
