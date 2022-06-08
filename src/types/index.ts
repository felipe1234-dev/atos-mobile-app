import { FieldPath, OrderByDirection, WhereFilterOp } from "firebase/firestore";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type Severity = "error" | "warning" | "info" | "success";

export type WhereClasule = readonly [FieldPath|string, WhereFilterOp, unknown];

export type OrderByClasule = readonly [FieldPath|string, OrderByDirection];

export type ScreenProps = NativeStackScreenProps<{}>;

export type RGB = { r: number, g: number, b: number };