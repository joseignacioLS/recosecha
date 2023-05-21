"use client";

import MoreInfoCard from "@/components/Calendar/MoreInfoCard";
import { event, getEventById } from "@/services/api.service";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import styles from "./page.module.scss";
import Footer from "@/components/Footer";
import Link from "next/link";

const page = ({}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [event, setEvent] = useState<event | undefined>(undefined);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  useEffect(() => {
    const id = searchParams.get("id");
    if (!id) return;
    const event = getEventById(id.toString());
    if (!event) {
      router.push("/");
      return;
    }
    setEvent(event);
  }, []);
  return (
    <>
      <section
        className={`lightSection darkStripes ${styles.incribeteSection}`}
      >
        <h3 className="sectionTitle">Inscríbete al evento</h3>
        <button>
          <Link href="/">Volver a Recosecha</Link>
        </button>
        <div className={styles.eventInfo}>
          <p>{event?.title}</p>
          <p>{event?.location}</p>
          <p>{event?.date}</p>
        </div>
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
          <label>
            <span>Nombre:</span>
            <input type="text" placeholder="Nombre" />
          </label>
          <label>
            <span>Apellidos:</span>
            <input type="text" placeholder="Apellidos" />
          </label>
          <label>
            <span>Número de asistentes:</span>
            <input type="number" value={1} min={0} max={8} placeholder="" />
          </label>
          <label>
            <span>Email de contacto</span>
            <input type="email" />
          </label>
          <button>Inscribime!</button>
        </form>
      </section>
      <Footer></Footer>
    </>
  );
};

export default page;
