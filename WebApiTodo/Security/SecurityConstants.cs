﻿using System.Security.Cryptography;

namespace Security
{
    public class SecurityConstants
    {
        public static readonly byte[] KeyForHmacSha256 = new byte[64];

        public static readonly string TokenIssuer = string.Empty;

        public static readonly string TokenAudience = string.Empty;

        public static readonly double TokenLifetimeMinutes = 30;

        static SecurityConstants()
        {
            KeyForHmacSha256 =  System.Convert.FromBase64String("YQBiAGMAZABlAGYAZwBoAGkAagBrAGwAbQBuAG8AcABxAHIAcwB0AHUAdgB3AHgAeQB6ADAAMQAyADMANAA1AA==");
            RNGCryptoServiceProvider cryptoProvider = new RNGCryptoServiceProvider();
            cryptoProvider.GetNonZeroBytes(KeyForHmacSha256);   //Secure enough? Will change on every call. Has to be made a constant.

            TokenIssuer = "issuer"; //What should be a good value here? web api url?

            TokenAudience = "http://localhost:90";  //What should be a good value here?
        }
    }
}