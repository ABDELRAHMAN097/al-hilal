import React from "react";
import "./Appointment.scss";
export default function index() {
  return (
    <div className="Appoint">
      <div className="APPOINTMENT">
        <h1>إحجز موعد</h1>
        <span className="line"></span>
        <p>
          {" "}
          الرجاء تسجيل الدخول باستخدام معرفك وكلمة المرور الخاصة بك <br />
          يرجى اختيار التخصص الطبي المطلوب واختيار الطبيب المفضل لديك من القائمة
          المتاحة <br />
          يرجى تحديد التاريخ والوقت المناسبين لك للموعد الطبي <br />
          بعد تحديد الموعد، يُطلب منك تأكيد الحجز لإتمام العملية <br />
          شكرًا لاستخدامك نظام حجز المستشفى الإلكتروني. نتطلع لخدمتك وتقديم
          الرعاية الصحية المناسبة لك
        </p>
      </div>
      <form className="form-appointment" action="#" method="post">
        <div className="inputs">
          <input
            className="input-ll col-3"
            type="text"
            id="name"
            name="name"
            required
            placeholder=":الاسم"
          />

          <input
            className="input-ll col-3"
            type="email"
            id="email"
            name="email"
            required
            placeholder=":البريد الإلكتروني"
          />

          <input
            className="input-ll col-3"
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder=":رقم التليفون"
          />

          <input
            className="input-ll col-3"
            type="date"
            id="date"
            name="date"
            required
            placeholder=":تاريخ الحجز"
          />

          <select
            className="input-ll col-3"
            id="department"
            name="department"
            required
            placeholder=":القسم"
          >
            <option value="">اسنان</option>
            <option value="أطفال">أطفال</option>
            <option value="نساء وتوليد">نساء وتوليد</option>
            <option value="جراحة">جراحة</option>
          </select>

          <select
            className="input-ll col-3"
            id="doctor"
            name="doctor"
            required
            placeholder=":الطبيب"
          >
            <option value="دكتور أحمد">دكتور أحمد</option>
            <option value="دكتورة سارة">دكتورة سارة</option>
            <option value="دكتور محمد">دكتورة سلمي</option>
            <option value="دكتور محمد">دكتور محمد </option>
          </select>

          <textarea
            className="textarea-ll"
            id="message"
            name="message"
            rows="4"
            placeholder="رسالة إضافية (اختياري)"
          ></textarea>
          <button className="btn-ll" type="submit">
            حجز
          </button>
        </div>
      </form>
    </div>
  );
}
