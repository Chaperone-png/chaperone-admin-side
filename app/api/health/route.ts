import { NextResponse } from "next/server";
import { checkBackendHealth } from "@/services/apis/misllaneousAPIs"; 

export async function GET() {
  const health = await checkBackendHealth();
  return NextResponse.json(health, {
    status: health.status, 
  });
}
