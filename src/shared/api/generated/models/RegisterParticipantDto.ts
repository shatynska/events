export type RegisterParticipantDto = {
  /**
   * @type string
   */
  fullName: string;
  /**
   * @type string, email
   */
  email: string;
  /**
   * @type string, date-time
   */
  birthDate: Date;
  /**
   * @type string
   */
  referralId: string;
  /**
   * @type string
   */
  eventId: string;
};
